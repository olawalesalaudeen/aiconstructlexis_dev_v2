# Binoculars
**Type:** Measurement  
**Referenced in:** 6 papers  
**Also known as:** Binocular  

## State of the Field

Across the provided literature, Binoculars is consistently characterized as a tool for detecting AI-generated text. The prevailing description of its mechanism is that it leverages distributional differences between human and machine writing, often operationalized through likelihood or log probability comparisons. A more specific framing, present in a subset of the data, states that it identifies AI content by comparing the log probabilities of an original text to a perturbed version, as one paper notes it "employ[s] perturbation as a comparison to the original text and rely on the log probability to detect." It is also described as an open-source and zero-shot detector, which allows it to function without labeled training data. In research practice, Binoculars is used as a baseline automatic detector and is evaluated as part of a "suite of prominent detectors." One study observes that it can "struggle" in certain contexts. The name appears as both "Binoculars" and "Binocular" across different papers.

## Sources

**[People who frequently use ChatGPT for writing tasks are accurate and robust detectors of AI-generated text](https://aclanthology.org/2025.acl-long.267.pdf)**
> Open-source method for detecting AI-generated text based on likelihood comparisons, used as a baseline automatic detector.

**[On the Risk of Evidence Pollution for Malicious Social Text Detection in the Era of LLMs](https://aclanthology.org/2025.acl-long.480.pdf) (as "Binocular")**
> Metric-based machine-generated text detection tool that identifies AI-generated content by comparing log probabilities of original and perturbed texts.
