import re
import json

raw_text = """
SECTION A — SOFTWARE ENGINEERING BASICS
1. What is software engineering primarily concerned with?

A. Writing code only
B. All aspects of software production
C. Hardware development
D. Network installation

→ Answer: B

→ Explanation:
Software engineering covers the entire lifecycle—from specification to maintenance, not just coding.

2. Why did software engineering emerge as a discipline?

A. Hardware shortage
B. Software crisis
C. Internet growth
D. Programming languages

→ Answer: B

→ Explanation:
The “software crisis” involved late delivery, high cost, and unreliable systems, which led to the need for structured engineering approaches.

3. Software systems are described as:

A. Physical
B. Mechanical
C. Abstract and intangible
D. Static

→ Answer: C

→ Explanation:
Software is not constrained by physical laws, making it flexible but highly complex.

4. What is a major challenge of software systems?

A. Weight
B. Power consumption
C. Complexity
D. Temperature

→ Answer: C

→ Explanation:
Because software has no physical limits, it can grow extremely complex and difficult to manage.

5. Professional software is typically developed by:

A. Individuals only
B. Teams
C. Machines
D. Customers

→ Answer: B

→ Explanation:
Large systems require collaboration, coordination, and maintenance, hence teams are needed.

🔹 SECTION B — SOFTWARE PRODUCTS
6. What is a software product?

A. Hardware tool
B. System with useful functionality
C. Network device
D. Programming language

→ Answer: B

→ Explanation:
Software products provide useful functionality to customers, e.g., Excel, mobile apps.

7. Generic software is developed for:

A. One client
B. Many users
C. Developers only
D. Government only

→ Answer: B

→ Explanation:
Generic software targets a wide range of customers (e.g., Microsoft Word).

8. Custom software is developed for:

A. Multiple companies
B. A specific client
C. Everyone
D. Open source

→ Answer: B

→ Explanation:
Custom software is tailored to specific business needs.

9. Product development starts with:

A. Coding
B. Product vision
C. Testing
D. Deployment

→ Answer: B

→ Explanation:
A product vision defines what to build, for whom, and why.

10. Product vision answers which question?

A. How to code
B. Who are the users
C. Which language to use
D. Where to host

→ Answer: B

→ Explanation:
Vision defines target users, purpose, and value.

🔹 SECTION C — PRODUCT MANAGEMENT
11. Who is responsible for a software product?

A. Tester
B. Product manager
C. Programmer
D. Designer

→ Answer: B

→ Explanation:
The product manager oversees planning, development, and customer alignment.

12. Product managers focus on:

A. Code only
B. Customers and business needs
C. Hardware
D. Testing only

→ Answer: B

→ Explanation:
They act as a bridge between business, users, and developers.

13. Product backlog is:

A. Code repository
B. To-do list of features
C. Database
D. UI design

→ Answer: B

→ Explanation:
Backlog contains prioritized work items like features and improvements.

14. Acceptance testing ensures:

A. Code compiles
B. Product meets goals
C. UI is beautiful
D. Database is full

→ Answer: B

→ Explanation:
It checks whether the product satisfies user needs and expectations.

15. Prototyping is used to:

A. Finalize system
B. Explore ideas
C. Deployment system
D. Remove features

→ Answer: B

→ Explanation:
Prototypes help test ideas and user reactions early.

🔹 SECTION D — AGILE DEVELOPMENT
16. Agile focuses on:

A. Documentation
B. Flexibility and speed
C. Hardware
D. Cost only

→ Answer: B

→ Explanation:
Agile emphasizes rapid delivery and adaptability to change.

17. Agile development is based on:

A. Linear process
B. Incremental development
C. Waterfall
D. Hardware cycles

→ Answer: B

→ Explanation:
Software is built in small increments with feedback loops.

18. Agile values:

A. Contracts over collaboration
B. Documentation over software
C. Working software over documentation
D. Plans over change

→ Answer: C

→ Explanation:
Agile prioritizes working software.

19. Agile supports:

A. Fixed requirements
B. Changing requirements
C. No requirements
D. Hardware

→ Answer: B

→ Explanation:
Change is expected and embraced.

20. Incremental delivery means:

A. Deliver everything at once
B. Deliver in parts
C. No delivery
D. Testing only

→ Answer: B

→ Explanation:
Software is delivered in usable increments.

🔹 SECTION E — EXTREME PROGRAMMING (XP)
21. XP stands for:

A. Extra Programming
B. Extreme Programming
C. Extended Processing
D. Experimental Programming

→ Answer: B

→ Explanation:
XP is an Agile method emphasizing coding practices and rapid delivery.

22. XP promotes:

A. Documentation
B. Pair programming
C. Hardware
D. Waterfall

→ Answer: B

→ Explanation:
Two developers work together to improve quality.

23. Test-driven development means:

A. Test after coding
B. Test before coding
C. No testing
D. Manual testing only

→ Answer: B

→ Explanation:
Tests are written before code to define expected behavior.

24. Continuous integration ensures:

A. No testing
B. Frequent integration
C. One-time deployment
D. Hardware checks

→ Answer: B

→ Explanation:
Code is integrated and tested frequently to avoid issues.

25. Refactoring means:

A. Adding features
B. Improving code structure
C. Deleting code
D. Testing

→ Answer: B

→ Explanation:
Improves readability and maintainability.

🔹 SECTION F — SCRUM
26. Scrum is:

A. Programming language
B. Agile framework
C. Hardware tool
D. Testing method

→ Answer: B

→ Explanation:
Scrum organizes Agile development into structured processes.

27. A sprint lasts:

A. 1 year
B. 2–4 weeks
C. 1 day
D. 6 months

→ Answer: B

→ Explanation:
Short development cycle producing usable increments.

28. Product owner is responsible for:

A. Coding
B. Features and priorities
C. Testing
D. UI

→ Answer: B

→ Explanation:
Defines and prioritizes product requirements.

29. ScrumMaster is:

A. Manager
B. Coach
C. Developer
D. Tester

→ Answer: B

→ Explanation:
Guides team in using Scrum effectively.

30. Daily scrum is:

A. Weekly meeting
B. Daily short meeting
C. Monthly review
D. Testing session

→ Answer: B

→ Explanation:
Used to track progress and plan work.

🔹 SECTION G — FEATURES, PERSONAS, SCENARIOS
31. A feature is:

A. A bug
B. Functionality
C. UI only
D. Code

→ Answer: B

→ Explanation:
Feature = fragment of functionality.

32. Personas represent:

A. Code
B. Imagined users
C. Features
D. Tests

→ Answer: B

→ Explanation:
They help developers understand user needs.

33. Scenarios describe:

A. Code structure
B. User interaction
C. Hardware
D. Testing

→ Answer: B

→ Explanation:
Scenarios show how users use the system.

34. Personas help developers:

A. Code faster
B. Empathize with users
C. Reduce cost
D. Test

→ Answer: B

→ Explanation:
They allow developers to “step into user’s shoes”.

35. Scenario is NOT:

A. Narrative
B. Specification
C. Usage description
D. User interaction

→ Answer: B

→ Explanation:
Scenarios are informal and not detailed specifications.

🔹 SECTION H — PRODUCT BACKLOG & SPRINTS
36. Product backlog contains:

A. Code
B. Tasks
C. UI
D. Hardware

→ Answer: B

→ Explanation:
List of features, fixes, and improvements.

37. Backlog items are called:

A. Features
B. PBIs
C. Tasks
D. Stories

→ Answer: B

→ Explanation:
Product Backlog Items (PBIs).

38. Story points measure:

A. Time
B. Effort
C. Code size
D. Speed

→ Answer: B

→ Explanation:
They estimate relative effort and complexity.

39. Sprint goal defines:

A. Code
B. Objective
C. UI
D. Testing

→ Answer: B

→ Explanation:
It sets what the sprint should achieve.

40. Sprint backlog is:

A. Product backlog
B. Subset for sprint
C. Code
D. UI

→ Answer: B

→ Explanation:
It contains items selected for that sprint.

🔹 SECTION I — TEAM & SCRUM PRACTICES
41. Ideal Scrum team size is:

A. 1–2
B. 5–8
C. 20
D. 50

→ Answer: B

→ Explanation:
Small enough for communication, large enough for diversity.

42. Self-organizing team means:

A. No leader
B. Team makes decisions
C. Manager controls
D. Fixed roles

→ Answer: B

→ Explanation:
Team members decide how to work collaboratively.

43. Scrum assumes teams are:

A. Remote
B. Co-located
C. Part-time
D. Independent

→ Answer: B

→ Explanation:
Designed for close communication environments.

44. Continuous integration involves:

A. Manual testing
B. Frequent merging
C. Deployment only
D. UI updates

→ Answer: B

45. Test automation ensures:

A. No testing
B. Faster testing
C. Manual testing
D. UI

→ Answer: B

🔹 SECTION J — GENERAL CONCEPTS
46. Software evolution is:

A. Static process
B. Continuous change
C. Hardware change
D. Coding

→ Answer: B

47. Software complexity arises due to:

A. Hardware
B. Growth and changes
C. UI
D. Testing

→ Answer: B

48. Software engineering methods include:

A. Design only
B. Techniques and processes
C. Hardware
D. Testing only

→ Answer: B

49. Software product line means:

A. One product
B. Related products
C. Hardware
D. UI

→ Answer: B

50. Platform allows:

A. Coding
B. Building applications
C. Testing
D. Deployment

→ Answer: B

→ Explanation:
Platforms provide base functionality for building new applications.
"""

topic_map = {
    "SECTION A": "Foundations",
    "SECTION B": "Software Products",
    "SECTION C": "Product Management",
    "SECTION D": "Agile",
    "SECTION E": "XP",
    "SECTION F": "Scrum",
    "SECTION G": "User Focus",
    "SECTION H": "Project Management",
    "SECTION I": "Scrum / Teams",
    "SECTION J": "General Concepts"
}

quizzes = []
sections = re.split(r"(SECTION [A-J])", raw_text)

for i in range(1, len(sections), 2):
    header = sections[i]
    content = sections[i+1]
    topic = topic_map.get(header, "General")
    
    # Split by question numbers at the start of a line
    q_blocks = re.split(r"\n(\d+)\.\s", "\n" + content)
    
    for j in range(1, len(q_blocks), 2):
        q_num = q_blocks[j]
        q_body = q_blocks[j+1]
        
        lines = [l.strip() for l in q_body.split("\n") if l.strip()]
        if not lines: continue
        
        question = lines[0]
        opts = []
        ans = ""
        exp = ""
        
        for l in lines[1:]:
            if re.match(r"^[ABCD]\.", l):
                opts.append(l[2:].strip())
            elif "Answer:" in l:
                ans = l.split("Answer:")[1].strip()
            elif "Explanation:" in l:
                # Get the remaining part of q_body for explanation
                parts = q_body.split("Explanation:")
                if len(parts) > 1:
                    exp = parts[1].strip().replace("\n", " ")
        
        if not exp:
            exp = f"The correct answer is {ans}."
            
        quizzes.append({
            "topic": topic,
            "difficulty": "Medium",
            "question": question,
            "options": opts,
            "answer": ans,
            "explanation": exp
        })

print("export const quizzes = [")
for q in quizzes:
    print("  {")
    print(f'    topic: "{q["topic"]}",')
    print(f'    difficulty: "{q["difficulty"]}",')
    print(f'    question: "{q["question"]}",')
    print(f'    options: {json.dumps(q["options"])},')
    print(f'    answer: "{q["answer"]}",')
    # Use double backslash for quotes or just replace them
    safe_exp = q["explanation"].replace('"', '\\"')
    print(f'    explanation: "{safe_exp}",')
    print("  },")
print("];")
