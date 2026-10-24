# Sub-answer generation
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Sub-question answering  

## State of the Field

**Space of definitions.** Across the available definitions, the shared framing is answering intermediate sub-queries or sub-questions that sit inside a larger complex question. One paper describes producing a direct answer for a specific, focused sub-query, and another frames it as answering a series of simpler questions that break down a complex multi-hop question into manageable steps. In the quoted task descriptions, the model is expected to produce responses to the intermediate questions, in one case using associated retrieved knowledge, and in the other to answer sub-questions "to reach the target rather than giving a final answer solely."

**Variants.** Papers use two closely related names, sub-answer generation and sub-question answering. The first appears in a retrieval-augmented setting, where the "sub-answer generator" produces responses based on sub-queries and any associated retrieved knowledge. The second appears in step-wise multi-hop question answering, where the behavior consists of answering a sequence of simpler, intermediate questions on the way to the target answer.

**Space of elicitation and scores.** The papers do not link this behavior to any measurement instrument. The available descriptions specify the task itself, but do not record a named instrument for eliciting or scoring it.

**What it is taken as evidence of.** The papers do not link this behavior to any construct, so they do not record it as evidence of a broader construct.

## Sources

**[Single LLM, Multiple Roles: A Unified Retrieval-Augmented Generation Framework Using Role-Specific Token Optimization](https://aclanthology.org/2025.emnlp-main.243.pdf)**
> The task of generating a direct answer for a specific, focused sub-query that is part of a larger, more complex query.

**[CofCA: A STEP-WISE Counterfactual Multi-hop QA benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/2628d4d3b054c2d7ad33ab03435204f4-Paper-Conference.pdf) (as "Sub-question answering")**
> The task of answering a series of simpler, intermediate questions that break down a complex multi-hop question into manageable steps.
