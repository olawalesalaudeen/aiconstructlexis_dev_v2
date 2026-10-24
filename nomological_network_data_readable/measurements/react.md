# ReAct
**Type:** Measurement  
**Referenced in:** 8 papers  

## State of the Field

Across the provided literature, ReAct is consistently described as a prompt-based agentic framework for large language models. The prevailing characterization is that it prompts a model to integrate verbal reasoning with actions, often specified as an alternating process of "thought and action" steps. Its most common application in these papers is as a performance baseline for evaluating other LLM-based agents and decision-making systems. A more specific framing, found in the context of question-answering, describes ReAct as a procedure that "interleaves decomposition or reasoning with retrieval to answer complex questions." This is consistent with its documented relationship to task decomposition, as one paper groups it with other approaches that "decompose the query into sub-questions." The framework is studied alongside other agentic frameworks like Act and Function Calling, and its performance is compared to methods such as Chain-of-Thought. Overall, it is presented as a method to structure and improve model performance on complex tasks.

## Sources

**[Strategist: Self-improvement of LLM Decision Making via Bi-Level Tree Search](https://proceedings.iclr.cc/paper_files/paper/2025/file/439dbffb7a044ee4b636babff57d4994-Paper-Conference.pdf)**
> An LLM-agent framework that prompts the model to think before acting, used as a performance baseline in evaluation.

## Relationships

### Associated with
- **Question decomposition** (behaviors tasks)
  > These approaches like SELF-ASK, ReAct and Searchain decompose the query into sub-questions that capture the multi-aspect nature of the query and perform better than approaches without decomposition (Section 5.1).
  - [SUNAR: Semantic Uncertainty based Neighborhood Aware Retrieval for Complex QA](https://aclanthology.org/2025.naacl-long.300.pdf)
