# Knowledge forgetting
**Type:** Construct  
**Referenced in:** 72 papers  
**Also known as:** Catastrophic forgetting, Language attrition, Spurious forgetting  

## State of the Field

**Definition agreement:** Consensus. Most papers define knowledge forgetting as a model losing previously acquired knowledge, capabilities, or performance on earlier tasks after being trained or fine-tuned on new tasks, data, or information, often in sequential or continual learning. A few papers add specific mechanisms or settings such as distribution shift, misaligned representations, targeted modification, or multilingual ability, but these are variations in explanation or context rather than different phenomena.

**Space of definitions.** Across the surveyed work, the prevailing usage treats this construct as forgetting that follows model updating: a loss or degradation of previously acquired knowledge, performance, or capabilities after learning new tasks or data. Most definitions appear under the name catastrophic forgetting, and describe it in settings such as direct weight updates, sequential learning, fine-tuning, or distribution shift. A smaller line of work narrows the idea to language attrition, where models fine-tuned on one language lose definition-generation ability in other languages despite retained comprehension, or to spurious forgetting, where post-training degradation is attributed to misaligned internal representations rather than complete knowledge loss.

**Space of facets.** Papers use the broad label for slightly different targets: some definitions focus on previously acquired knowledge, others on capabilities or task performance. Within that family, language attrition is a language-specific variant centered on active generation loss, while spurious forgetting names cases where performance drops even though the paper argues the underlying knowledge may still be present. The same terminology is used across continual or lifelong learning, task incremental learning, fine-tuning, pre-training under shifted distributions, and unlearning, so the concept is broad in scope but not fully uniform in what is said to be forgotten.

**Space of measurement.** Operationalization is narrow in the linked evidence. Papers link the construct to one measurement instrument and one behavioral indicator: the only instrument is Biography, described as a synthetic dataset used in controlled experiments to investigate the causes of spurious forgetting, and the only linked behavioral indicator is Catastrophic forgetting. The explicit measurement therefore centers on a dataset-based controlled setup for the spurious-forgetting variant, rather than a broader battery spanning the more common catastrophic-forgetting definitions.

**Links.** Link evidence is limited and concentrated in one paper. That paper claims a causal relationship from Task alignment to Knowledge forgetting, stating that spurious forgetting is caused by loss of task alignment rather than underlying knowledge. The same paper also says Knowledge forgetting is related to Catastrophic forgetting, framing the relation as a question of whether observed forgetting is genuine or spurious; no correlational link is recorded.

## Sources

**[Prompt Tuning Strikes Back: Customizing Foundation Models with Low-Rank Prompt Adaptation](https://proceedings.neurips.cc/paper_files/paper/2024/file/548551c07a68c8f0a87d67c6167cedb1-Paper-Conference.pdf) (as "Catastrophic forgetting")**
> The tendency of direct weight updates to cause a model to lose previously acquired knowledge when adapting to new tasks.

**[Definition Generation for Word Meaning Modeling: Monolingual, Multilingual, and Cross-Lingual Perspectives](https://aclanthology.org/2025.emnlp-main.1321.pdf) (as "Language attrition")**
> The degradation of a model's ability to generate definitions in languages not included in fine-tuning, despite prior competence in those languages.

**[Weights-Rotated Preference Optimization for Large Language Models](https://aclanthology.org/2025.emnlp-main.1329.pdf)**
> The degradation of a model's previously acquired knowledge and capabilities after being fine-tuned on a new task or dataset.

**[ChatVLA: Unified Multimodal Understanding and Robot Control with Vision-Language-Action Model](https://aclanthology.org/2025.emnlp-main.273.pdf) (as "Spurious forgetting")**
> A phenomenon where a model's performance on a previously learned task degrades after training on a new task, not due to a complete loss of knowledge but due to a misalignment of internal representations.

## Relationships

### Knowledge forgetting →
- **Biography** (measurements) — *measured_by*
  > “we constructed a synthetic dataset, the Biography dataset, and designed controlled experiments to investigate the underlying causes of spurious forgetting”
  - [Spurious Forgetting in Continual Learning of Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a774503daed55eb53c634847ae071ec7-Paper-Conference.pdf)

### → Knowledge forgetting
- **Task alignment** (constructs) — *causes*
  > We find that spurious forgetting is caused by the loss of task alignment instead of underlying knowledge (Section 1).
  - [Spurious Forgetting in Continual Learning of Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a774503daed55eb53c634847ae071ec7-Paper-Conference.pdf)

### Associated with
- **Catastrophic forgetting** (behaviors tasks)
  > This observation challenges the conventional understanding of catastrophic forgetting and prompts us to explore whether forgetting genuinely occurs in language models or if it is, in fact, spurious (Section 1).
  - [Spurious Forgetting in Continual Learning of Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a774503daed55eb53c634847ae071ec7-Paper-Conference.pdf)
