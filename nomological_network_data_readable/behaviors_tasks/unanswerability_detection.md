# Unanswerability detection
**Type:** Behavior  
**Referenced in:** 4 papers  
**Also known as:** Answerable judging, Answer existence judgment, Answerability classification  

## State of the Field

**Space of definitions.** Most commonly, papers treat this behavior as a judgment about whether a question can be answered from the available context, often phrased as predicting whether it is answerable or should be marked unanswerable. A smaller line of work narrows the behavior to checking whether a math problem provides sufficient information to solve, or whether the correct answer to a medical question exists within a candidate option set. Across these formulations, success is the correct decision about answerability, sufficiency of information, or existence of an answer.

**Variants.** Papers study it in several settings under different names: answerability classification for context-based question answering, answerable judging for mathematical reasoning, and answer existence judgment for medical questions with candidate options. The math variant asks the model to analyze the question, identify the conditions needed to solve it, and verify whether those conditions are present, while the medical variant asks whether the correct answer exists in the option set and is described as assessing answer plausibility in open decision spaces.

**Space of elicitation and scores.** No measurement instrument is linked to it. Instead, papers operationalize it directly as a classification or judgment task, requiring the model to decide whether a question is answerable, whether a problem contains sufficient information, or whether the correct answer is present among candidate options.

**What it is taken as evidence of.** Only one construct is linked, and the link is recorded as related rather than as a measurement claim: task generalization is related to this behavior. One paper describes task generalization as including problem solving, answerable judging, outcome judging, and process judging; beyond that, no other construct links are recorded.

## Sources

**[Is Your Model Really A Good Math Reasoner? Evaluating Mathematical Reasoning with Checklist](https://proceedings.iclr.cc/paper_files/paper/2025/file/54d2d38a56a74387d5916ee40e462295-Paper-Conference.pdf) (as "Answerable judging")**
> The observable behavior of determining whether a given mathematical problem contains sufficient information to be solved.

**[Evaluating LLMs Across Multi-Cognitive Levels: From Medical Knowledge Mastery to Scenario-Based Problem Solving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhou25n/zhou25n.pdf) (as "Answer existence judgment")**
> Determining whether the correct answer to a medical question is present within a given set of candidate options, testing the model's ability to assess answer plausibility in open decision spaces.

**[Instructive Decoding: Instruction-Tuned Large Language Models are Self-Refiner from Noisy Instructions](https://proceedings.iclr.cc/paper_files/paper/2024/file/1f5c76187c28e8d9d3b938d0c504436c-Paper-Conference.pdf) (as "Answerability classification")**
> The task of determining whether a given question is answerable based on a provided context.

## Relationships

### Associated with
- **Task generalization** (constructs)
  > horizontally, we examine the task generalization including problem solving, answerable judging, outcome judging, and process judging. (Section 1)
  - [Is Your Model Really A Good Math Reasoner? Evaluating Mathematical Reasoning with Checklist](https://proceedings.iclr.cc/paper_files/paper/2025/file/54d2d38a56a74387d5916ee40e462295-Paper-Conference.pdf)
