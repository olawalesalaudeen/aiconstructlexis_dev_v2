# Event prediction
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Event forecasting, Binary forecasting  

## State of the Field

**Space of definitions.** Across the available definitions, the recurring framing is future-oriented prediction from prior context: papers describe predicting whether a future event will occur from current and past events, or generating the next event content from observed video dynamics. The success criterion varies by formulation: one paper treats an event as likely when it can be placed in a causal graph as a leaf node, another asks the model to select the video segment most logically related to the preceding context, and another frames the task as assigning a probability from 0 to 1 to a future question with a binary true or false outcome.

**Variants.** Papers use several nearby names for this behavior, including event forecasting, event prediction, and binary forecasting. The main variants differ by setting and output form: causal event reasoning over a graph structure, video-sequence prediction where the predicted content is a segment, and binary future-event questions answered with probabilities. One formulation also states that the forecaster is queried separately on each question.

**Space of elicitation and scores.** No measurement instrument is linked to it. Instead, elicitation and scoring are built into the task formulations themselves: papers ask for a selected video segment, assess whether a future event can be placed as a leaf node in a causal graph, or collect a probability in the [0,1] range for each binary forecasting question.

**What it is taken as evidence of.** No construct is linked to it, so the papers do not specify a broader construct that this behavior is evidence of.

## Sources

**[Causal Graph based Event Reasoning using Semantic Relation Experts](https://aclanthology.org/2025.acl-long.1269.pdf) (as "Event forecasting")**
> Predicting whether a future event will occur based on current and past events, often by assessing its plausibility within a causal structure.

**[VideoVista-CulturalLingo: 360° Horizons-Bridging Cultures, Languages, and Domains in Video Comprehension](https://aclanthology.org/2025.acl-long.1315.pdf)**
> Generating predictions about future events in a video sequence based on prior context and observed dynamics.

**[Consistency Checks for Language Model Forecasters](https://proceedings.iclr.cc/paper_files/paper/2025/file/5107a33432b9a5cffafd0a53ef6c6a18-Paper-Conference.pdf) (as "Binary forecasting")**
> The observable task of assigning a probability between 0 and 1 to a question about a future event that has a binary (True/False) outcome.
