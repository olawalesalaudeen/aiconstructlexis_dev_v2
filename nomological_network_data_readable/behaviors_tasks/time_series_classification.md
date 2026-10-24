# Time series classification
**Type:** Behavior  
**Referenced in:** 7 papers  
**Also known as:** Time-series classification  

## State of the Field

**Space of definitions.** Across definitions, the prevailing usage treats time series classification as whole-sequence labeling: assigning a class or categorical label to a sequence of time-ordered data points, often phrased as labeling an entire time series. Most descriptions stay at the level of outputting the label for the input sequence, while some further specify univariate or multivariate inputs or say the label is assigned from temporal patterns. A smaller formulation casts it as assigning a class label to a time-series input in response to a textual question or prompt.

**Variants.** Papers study this task across several settings, including human activity recognition, medical physiological-signal tasks, and datasets spanning biology, healthcare, electricity, physics, and nature. Variants include binary and multi-class classification, fine-grained and coarse-grained classification, and both univariate and multivariate sequences. Some examples are framed around physiological signals, such as diagnosing sepsis from a mean arterial pressure sequence, and papers also describe it as related to Emotion analysis and Sleep stage classification in that application area.

**Space of elicitation and scores.** No measurement instrument is linked to it. Instead, papers operationalize it through task setups such as evaluating LLM performance with continuous context after fine-tuning non-linear projectors, standardizing datasets as classification tasks, and posing the task through textual questions or prompts.

**What it is taken as evidence of.** No construct is linked to it as something it measures or indicates, so papers do not present a construct-level interpretation for it here. A smaller line of work describes it as related to Emotion analysis and Sleep stage classification, rather than as evidence of a broader construct.

## Sources

**[Vector-ICL: In-context Learning with Continuous Vector Representations](https://proceedings.iclr.cc/paper_files/paper/2025/file/46516c4204d6cab8299e55d4ebf7ccec-Paper-Conference.pdf) (as "Time-series classification")**
> The observable task of assigning a class label to a sequence of time-ordered data points.

**[Time-MQA: Time Series Multi-Task Question Answering with Context Enhancement](https://aclanthology.org/2025.acl-long.1437.pdf)**
> The observable task of assigning a categorical label to an entire time series sequence.

## Relationships

### Associated with
- **Emotion analysis** (behaviors tasks)
  > Specifically, we focus on various medical time series classification (TSC) tasks based on the physiological signals, including emotion recognition (Li et al., 2024a), sleep stage detection (Supratak et al., 2017; Dong et al., 2017), neurological disorder classification (Yang et al., 2022b; Zhang et al., 2022), etc. (Section 1).
  - [Efficient Personalized Adaptation for Physiological Signal Foundation Model](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25ah/wu25ah.pdf)
- **Sleep stage classification** (behaviors tasks)
  > Specifically, we focus on various medical time series classification (TSC) tasks based on the physiological signals, including emotion recognition (Li et al., 2024a), sleep stage detection (Supratak et al., 2017; Dong et al., 2017), neurological disorder classification (Yang et al., 2022b; Zhang et al., 2022), etc. (Section 1).
  - [Efficient Personalized Adaptation for Physiological Signal Foundation Model](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25ah/wu25ah.pdf)
