# Speech classification
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Word identity prediction  

## State of the Field

**Space of definitions.** Across the papers, the behavior is treated as a speech-to-label task. One definition frames it broadly as classifying an audio waveform of speech into a predefined set of categories, while another uses the narrower name word identity prediction, identifying a specific keyword or command from a spoken utterance. Across these formulations, success is described as assigning the utterance to the target category or word identity.

**Variants.** The recorded variants focus on raw speech inputs and spoken-word recognition. Papers mention raw speech classification with long sequences, speech classification on the SC10 subset of the Speech Commands dataset, and word identity prediction among spoken keywords or commands. One paper also places word prediction alongside phonemes and describes it as moderate in semantic difficulty.

**Space of elicitation and scores.** No measurement instrument is linked to it. Instead, papers operationalize the behavior directly through task performance settings such as raw speech classification with long sequences and word identity prediction.

**What it is taken as evidence of.** Only one construct is linked to it, Long-range dependency modeling. One paper links the task to that construct through a measured_by relation, stating that speech classification is used 'to evaluate the ability to learn long-range dependencies in real-world time-series data.' No other construct link is reported.

## Sources

**[Orchid: Flexible and Data-Dependent Convolution for Sequence Modeling](https://proceedings.neurips.cc/paper_files/paper/2024/file/8ccc5ec30a8d46793d790e2216efd40d-Paper-Conference.pdf)**
> The task of classifying an audio waveform of speech into a predefined set of categories.

**[Improving Semantic Understanding in Speech Language Models via Brain-tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/95b7a93e60fdfd10cc202f44fd6adf5f-Paper-Conference.pdf) (as "Word identity prediction")**
> The task of identifying a specific keyword or command from a spoken utterance.

## Relationships

### Associated with
- **Long-range dependency modeling** (constructs)
  > To evaluate the ability to learn long-range dependencies in real-world time-series data, we conducted experiments on the speech classification task... (Appendix C.5)
  - [Orchid: Flexible and Data-Dependent Convolution for Sequence Modeling](https://proceedings.neurips.cc/paper_files/paper/2024/file/8ccc5ec30a8d46793d790e2216efd40d-Paper-Conference.pdf)
