# SAPLMA
**Type:** Measurement  
**Referenced in:** 6 papers  

## State of the Field

Across the provided literature, SAPLMA (Statement Accuracy Prediction based on Language Model Activations) is consistently described as a method for predicting the truthfulness or factual accuracy of statements by analyzing an LLM's hidden layer activations. The instrument is most commonly characterized as a probe, with one paper specifying it as a "feedforward neural network" ("Beyond Position...") and another as an "auxiliary linear classifier" ("Towards Faithful..."). In terms of its application, it is framed both as a tool to classify statements as true or false and as a "confidence estimation method." One study also notes the existence of variants—SAPLMA-F, SAPLMA-M, and SAPLMA-UM—which correspond to using different layer inputs for the prediction. The primary use of SAPLMA, as presented in these sources, is to classify statement veracity based on internal model states.

## Sources

**[Are the Hidden States Hiding Something? Testing the Limits of Factuality-Encoding Capabilities in LLMs](https://aclanthology.org/2025.acl-long.304.pdf)**
> Statement Accuracy Prediction based on Language Model Activations, a feedforward neural network probe that classifies the truthfulness of statements by analyzing hidden layer activations of LLMs.
