# Counterfactual prediction
**Type:** Behavior  
**Referenced in:** 3 papers  

## State of the Field

**Space of definitions.** Across the available definitions, counterfactual prediction is described as producing the outcome that would hold under a hypothetical change. One recurring formulation asks for an event's outcome under the condition that a later, causally relevant event did not occur, while another treats it as producing outputs that reflect hypothetical changes in the task latent, such as altered rules or parameters. Success is framed as obtaining the correct counterfactual prediction, or as whether the prediction is what it should have been under the new latent variable.

**Variants.** Papers study it in at least two settings. One uses a knowledge-cutoff setup, including examples such as predicting the year the Tokyo Olympics were held given a cutoff of 2018, and describes a "Counterfactual subset" to assess whether LLMs forget causally related events when making predictions. Another studies counterfactual prediction through changes to the task latent, especially altered rules or parameters in the generative process.

**Space of elicitation and scores.** No measurement instrument is linked to it. Instead, papers describe it through task formulations and examples, such as knowledge cutoffs or changes to latent variables.

**What it is taken as evidence of.** No construct is linked to it. Papers therefore do not specify what broader construct it is taken to indicate.

## Sources

**[Can Prompts Rewind Time for LLMs? Evaluating the Effectiveness of Prompted Knowledge Cutoffs](https://aclanthology.org/2025.emnlp-main.1049.pdf)**
> The task of predicting an event's outcome under the hypothetical condition that a subsequent, causally relevant event did not occur.
