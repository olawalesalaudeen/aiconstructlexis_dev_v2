# Log probability
**Type:** Measurement  
**Referenced in:** 3 papers  
**Also known as:** Log Probability, Token probability, Surprisal  

## State of the Field

Across the provided literature, log probability is a versatile metric used to probe different aspects of language model behavior, primarily focusing on authorship attribution and bias. One line of work operationalizes log probability as a training-free method for detecting AI-generated text, treating it as a "statistical indicator of AI authorship" based on the tendency of models to generate high-probability tokens ("SenDetEX: Sentence-Level AI-Generated Text Detection for Human-AI Hybrid Content via Style and Context Fusion"). A more common application in this set of papers is the measurement of model bias, where the probability assigned to specific tokens reveals underlying model expectations. For instance, "Token probability" is defined as a measure of the likelihoods for gendered tokens like 'he' and 'she' to capture "fine-grained, probabilistic bias" ("Measuring Bias or Measuring the Task: Understanding the Brittle Nature of LLM Gender Biases"). Similarly, a related concept called "Surprisal," defined as the negative log probability, is used to measure how strongly a model expects a particular user demographic based on the probability of a demographic attribute value following a prompt ("Reading Between the Prompts: How Stereotypes Shape LLM's Implicit Personalization"). While the underlying calculation of model-assigned token likelihood is consistent, its application varies, being framed as a detector for AI authorship in one context and as a tool for uncovering implicit gender and demographic biases in others.

## Sources

**[SenDetEX: Sentence-Level AI-Generated Text Detection for Human-AI Hybrid Content via Style and Context Fusion](https://aclanthology.org/2025.emnlp-main.268.pdf) (as "Log Probability")**
> A training-free detection method that uses the log probability of tokens in a sentence as a statistical indicator of AI authorship, based on the tendency of LLMs to generate higher-probability tokens.

**[Measuring Bias or Measuring the Task: Understanding the Brittle Nature of LLM Gender Biases](https://aclanthology.org/2025.emnlp-main.342.pdf) (as "Token probability")**
> Metric measuring the model-assigned likelihoods for gendered tokens (e.g., he, she, they), capturing fine-grained, probabilistic bias in internal representations.

**[Reading Between the Prompts: How Stereotypes Shape LLM's Implicit Personalization](https://aclanthology.org/2025.emnlp-main.1029.pdf) (as "Surprisal")**
> The negative log probability of a demographic attribute value after a prompt, used to measure how strongly the model expects a particular user demographic based on its latent representation.
