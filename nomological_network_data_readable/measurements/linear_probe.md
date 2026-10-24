# Linear probe
**Type:** Measurement  
**Referenced in:** 6 papers  

## State of the Field

A linear probe is characterized as a method for assessing constructs by training a linear classifier on a large language model's internal hidden states. The available data specifies that Multilayer Perceptron (MLP) activations are used as inputs for the classifier. This technique is operationalized to predict latent constructs from these internal representations. For example, one study uses linear probes to measure "Semantic understanding," while another applies them to predict "trait impressions" like warmth and competence. As one paper states, "We train linear probes to predict trait impressions from ... LLM hidden representations" (Artificial Impressions: Evaluating Large Language Model Behavior Through the Lens of Trait Impressions). The effectiveness of this measurement approach is evaluated using classification metrics, with one study reporting that its probes' F1 scores surpassed a bag-of-words baseline.

## Sources

**[Artificial Impressions: Evaluating Large Language Model Behavior Through the Lens of Trait Impressions](https://aclanthology.org/2025.emnlp-main.981.pdf)**
> A method that trains a linear classifier on LLM hidden states (e.g., MLP activations) to predict latent constructs such as warmth and competence impressions.
