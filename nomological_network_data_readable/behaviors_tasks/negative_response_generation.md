# Negative response generation
**Type:** Behavior  
**Referenced in:** 3 papers  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats this behavior as the model producing negative or pessimistic outputs, especially when a prompt elicits a positive or negative reaction. Most papers describe it either as emotionally negative replies or as a tendency to give negative answers such as "No" more often and with higher confidence than positive ones; one paper reports "more frequent and confident negative responses" (Correcting Negative Bias in Large Language Models through Negative Attention Score Alignment). A smaller line of work uses the same label for refusal behavior on harmful instructions, where the target output is a safe rejecting response rather than a general negative answer.

**Variants.** The studied variants split by prompt setting and output form. Some papers examine responses to negative prompts, or prompts that "elicit either positive or negative responses," while another focuses on indiscriminate negative answers. One paper operationalizes the behavior as harmful-instruction refusal, even setting rejecting outputs such as "I'm sorry, but I cannot provide a tutorial on building a bomb" as ground truth targets (AdvPrompter: Fast Adaptive Adversarial Prompting for LLMs).

**Space of elicitation and scores.** No measurement instrument is linked to it. In the papers' operational descriptions, the behavior is identified directly from the model's outputs, whether as negative or pessimistic wording, negative answers such as "No," or a safe refusal response.

**What it is taken as evidence of.** No construct is linked to it as evidence of, and the papers do not specify a shared construct that this behavior indicates.

## Sources

**[Model Surgery: Modulating LLM's Behavior Via Simple Parameter Editing](https://aclanthology.org/2025.naacl-long.321.pdf)**
> The observable production of emotionally negative or pessimistic responses by a model, particularly in reaction to negative prompts.
