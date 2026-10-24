# Multi-turn dialogue generation
**Type:** Behavior  
**Referenced in:** 6 papers  
**Also known as:** Multi-turn conversation generation, Cross-cultural dialogue generation  

## State of the Field

The behavior of multi-turn dialogue generation is defined in the provided literature as the production of a sequence of user queries and model responses across multiple conversational turns. A central aspect of this behavior is the maintenance of coherence and alignment with an overarching intent throughout the interaction. One paper describes a framework, "Skeleton-Guided Multi-Turn Dialogue Generation," which operationalizes this by constraining instruction synthesis through the explicit modeling of human conversational intent. This process involves generating a "globally coherent sequence of user queries conditioned on the underlying intent." Subsequently, the model produces agent responses that are designed to "maintain alignment with both current and global conversational objectives."

## Sources

**[ConsistentChat: Building Skeleton-Guided Consistent Multi-Turn Dialogues for Large Language Models from Scratch](https://aclanthology.org/2025.emnlp-main.424.pdf)**
> Producing a sequence of user queries and model responses across multiple conversational turns, maintaining coherence and alignment with an overarching intent.

**[LLaMo: Large Language Model-based Molecular Graph Assistant](https://proceedings.neurips.cc/paper_files/paper/2024/file/ee46288ab2aaf5c6e53aebebe719712c-Paper-Conference.pdf) (as "Multi-turn conversation generation")**
> Producing sequential responses in a dialogue format regarding molecular data and instructions.

**[CulturePark: Boosting Cross-cultural Understanding in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/77f089cd16dbc36ddd1caeb18446fbdd-Paper-Conference.pdf) (as "Cross-cultural dialogue generation")**
> Producing multi-turn conversations between culturally distinct agents about an initial question or topic.
