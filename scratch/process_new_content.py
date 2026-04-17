import re
import json

raw_file = "/Users/ridbay/Projects/817_practice/scratch/new_content_raw.txt"

with open(raw_file, 'r') as f:
    full_text = f.read()

topic_map = {
    "SECTION K": "Features / Scenarios",
    "SECTION L": "Product Vision",
    "SECTION M": "Prototyping",
    "SECTION N": "Agile",
    "SECTION O": "Scrum",
    "SECTION P": "Project Management",
    "SECTION Q": "Teams",
    "SECTION R": "Quality / Testing",
    "SECTION S": "General Concepts",
    "SECTION T": "Processes / Models",
    "SECTION U": "Requirements Engineering",
    "SECTION V": "Modeling / UML",
    "SECTION W": "Design / Architecture",
    "SECTION X": "Cloud / Microservices",
    "SECTION Y": "Quality / Testing",
    "SECTION Z": "Management / Ethics",
    "SECTION AA": "Integration",
    "EXTRA QUIZZES": "Requirements Engineering"
}

blocks = full_text.split("# BLOCK")
quizzes = []
theory_items = []

for block in blocks:
    if "THEORY QUESTIONS" in block:
        # Split by number, potentially preceded by emoji
        # Pattern: Newline, potentially whitespace, potentially an emoji, digit, dot, space
        t_items_raw = re.split(r"\n\s*(?:[🔵🔴]\s*)?(\d+)\.\s", "\n" + block)
        for i in range(1, len(t_items_raw), 2):
            t_id = t_items_raw[i]
            t_body = t_items_raw[i+1]
            
            lines = [l.strip() for l in t_body.split("\n") if l.strip()]
            if not lines: continue
            
            question = lines[0].strip()
            
            model_ans = ""
            example = ""
            
            ans_match = re.search(r"✅ Model Answer(.*?)(Example:|$)", t_body, re.DOTALL)
            if ans_match:
                model_ans = ans_match.group(1).strip()
            
            ex_match = re.search(r"Example:(.*?)$", t_body, re.DOTALL)
            if ex_match:
                example = ex_match.group(1).strip()
                
            theory_items.append({
                "id": t_id,
                "question": question,
                "answer": model_ans,
                "example": example
            })
    elif "QUIZZES" in block or "SECTIONS" in block:
        sub_sections = re.split(r"(SECTION [A-Z]+|REQUIREMENTS ENGINEERING — EXTRA QUIZZES)", block)
        for i in range(1, len(sub_sections), 2):
            header = sub_sections[i].replace(" — EXTRA QUIZZES", "").strip()
            content = sub_sections[i+1]
            topic = topic_map.get(header, "General")
            
            q_parts = re.split(r"\n\s*(\d+)\.\s", "\n" + content)
            for j in range(1, len(q_parts), 2):
                q_num = q_parts[j]
                q_body = q_parts[j+1]
                
                lines = [l.strip() for l in q_body.split("\n") if l.strip()]
                if not lines: continue
                
                question = lines[0]
                opts = []
                ans = ""
                exp = ""
                
                for l in lines[1:]:
                    if re.match(r"^[ABCD]\.", l):
                        opts.append(l[2:].strip())
                    elif "Answer:" in l or "→ Answer:" in l:
                        ans = l.split("Answer:")[1].strip()
                    elif "Explanation:" in l or "→ Explanation:" in l:
                        parts = q_body.split("Explanation:")
                        if len(parts) > 1:
                            # Search for the next question or section to stop explanation early if concatenated
                            exp = parts[1].strip().replace("\n", " ")
                
                if not exp: exp = f"The correct answer is {ans}."
                
                quizzes.append({
                    "topic": topic,
                    "difficulty": "Medium",
                    "question": question,
                    "options": opts,
                    "answer": ans,
                    "explanation": exp
                })

with open("/Users/ridbay/Projects/817_practice/scratch/extended_quizzes.js", "w") as f:
    f.write("export const extendedQuizzes = " + json.dumps(quizzes, indent=2) + ";")

with open("/Users/ridbay/Projects/817_practice/scratch/theory_bank.js", "w") as f:
    f.write("export const theoryBank = " + json.dumps(theory_items, indent=2) + ";")

print(f"Processed {len(quizzes)} quizzes and {len(theory_items)} theory items.")
