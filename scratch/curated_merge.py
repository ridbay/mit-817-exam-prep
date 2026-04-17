import json

def curated_merge():
    # 1. Load the unified 403-question bank as our base pool
    with open('scratch/unified_quizzes.json', 'r', encoding='utf-8') as f:
        pool = json.load(f)
    
    # 2. Identify the Master Set (first 177 questions)
    master_set = pool[:177]
    mcq_salvage_pool = pool[177:]
    
    # 3. Categorize topics we want to KEEP from the salvage pool
    high_yield_topics = [
        "Modeling and UML",
        "UML & Modeling",
        "UML Nuances",
        "Design and Architecture",
        "Design & Architecture",
        "Cloud & Microservices",
        "Cloud and Microservices",
        "Cloud and Modern Architecture",
        "Cloud, Microservices, Security, Reliability",
        "Process Models",
        "Quality and Testing",
        "Advanced Testing & Quality",
        "Maintenance & Process",
        "Design Patterns",
        "DevOps, Teams, Ethics"
    ]
    
    curated_bank = list(master_set)
    added_count = 0
    
    for q in mcq_salvage_pool:
        # Check if the question is in a high-yield category
        # OR if it's uniquely different from our master set
        if q['topic'] in high_yield_topics:
            curated_bank.append(q)
            added_count += 1
            
    # Remove any stray "mcqs" artifacts or just ensure formatting
    print(f"Master Questions: {len(master_set)}")
    print(f"Curated Salvage: {added_count}")
    print(f"Final Study Bank: {len(curated_bank)}")
    
    with open('scratch/curated_quizzes.json', 'w', encoding='utf-8') as f:
        json.dump(curated_bank, f, indent=2)

if __name__ == "__main__":
    curated_merge()
