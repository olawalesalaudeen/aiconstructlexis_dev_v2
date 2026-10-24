# MIND
**Type:** Measurement  
**Referenced in:** 6 papers  

## State of the Field

**What it is.** Papers most commonly describe MIND as a hallucination detection method whose distinctive feature is automatic label creation during detection, rather than reliance on pre-annotated data. One definition presents it as classification-based, while another describes it as unsupervised; the more detailed account says it truncates Wikipedia articles, prompts an LLM to continue the next sentence, and generates truth labels by matching named entities between the response and the original succeeding sentence.

**What it is claimed to measure.** In the recorded links, papers do not specify MIND as measuring any behavioral indicator, and they link it to one construct only, Generalization, through a related claim rather than a measured_by claim. The definitions frame it as a hallucination detection method, but the explicit network links are concentrated on that single construct rather than spread across many named constructs.

**Space of uses.** No measurement instrument is linked to MIND. In the usage descriptions, papers position it as an alternative to approaches that rely on pre-annotated datasets, and one comparison states that unlike SAPLMA, MIND labels data during the detection process to train its classifier.

**Concerns raised.** One paper raises a generalization concern: it reports that MIND's accuracy drops when tested on other datasets and relates MIND to Generalization on that basis, describing it as unable to generalize well.

## Sources

**[HD-NDEs: Neural Differential Equations for Hallucination Detection in LLMs](https://aclanthology.org/2025.acl-long.309.pdf)**
> A classification-based hallucination detection method that automatically labels data during detection to train its classifier.
