# Stability
**Type:** Construct  
**Referenced in:** 11 papers  
**Also known as:** Local stability, Inference stability  

## State of the Field

**Definition agreement:** Conflicting. The papers use "stability" for several different phenomena rather than one shared property. A few define it as robustness or consistency of predictions or outputs under perturbations or repeated sampling, but many others use it for controlled training dynamics and numerical behavior, consistency across retrieval depth or rounds and languages, or retaining capabilities under self-training and knowledge updates, so papers using these definitions would often not be studying the same thing.

**Space of definitions.** Most definitions frame stability as consistency or robustness under change, but papers disagree on what should remain stable and under which variation. Some define it as a latent property of prediction robustness at a given input, with high local neighborhood confidence and low variability in embedding space, while others define it as consistent performance near an optimal retrieval depth, or as consistent high-quality generations for the same input, quantified by variance in reward scores. A smaller line of work uses stability for controlled training dynamics that avoid collapse, for decoding algorithms whose output probabilities change only in bounded ways under logit perturbations, for performance retained across training rounds and languages, for robustness of concepts or explanations to input or concept-set perturbations, and for preserving knowledge or overall capabilities during self-training or knowledge editing.

**Space of facets.** Papers introduce named subtypes such as local stability, inference stability, and training stability. Beyond these labels, the concept is applied to several levels: predictions at a single input, model performance over retrieval windows or training rounds, decoding behavior under perturbed logits, concepts and explanations under perturbations, and preservation of old knowledge or overall capabilities under continued training or sequential edits. Stability is also discussed in balance language with plasticity, and one line explicitly frames its local version as quantifying prediction consistency over equally well performing fine-tuned models, while another paper juxtaposes instability with lack of coherence.

**Space of measurement.** Operationalizations vary across papers. Papers link stability to 2 measurement instruments, BIG-bench and MMLU, both used as benchmarks in one study, and no behavioral indicator is linked to it. Elsewhere, authors operationalize it through analyses that match their local definitions: local neighborhood confidence and variability in embedding space, performance fluctuation within a small retrieval window around optimal depth, standard deviation of reward model scores across sampled generations, bounded changes in output token probabilities under small logit perturbations, and signs of training collapse or preservation of old knowledge. In each case, the operationalization follows the paper's own definition of what should remain stable.

**Links.** Several papers relate stability to plasticity, often in terms of maintaining a balance between the two. Single papers also report it as related to coherence and one other construct. Separate papers claim causal relationships from stability to faithfulness, generation diversity, and instruction following ability, and no correlational link is reported.

## Sources

**[Quantifying Prediction Consistency Under Fine-tuning Multiplicity in Tabular LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hamman25a/hamman25a.pdf) (as "Local stability")**
> A latent property reflecting the robustness of a model's prediction at a given input, determined by the average confidence and variability of predictions in its local neighborhood in the embedding space.

**[RAGGED: Towards Informed Design of Scalable and Stable RAG Systems](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hsia25a/hsia25a.pdf)**
> The consistency of model performance around its optimal retrieval depth, indicating resilience to small variations in the number of retrieved passages.

**[Test-Time Preference Optimization: On-the-Fly Alignment via Iterative Textual Feedback](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25ac/li25ac.pdf) (as "Inference stability")**
> The degree to which a model consistently produces high-quality outputs for a given input, measured by the variance in reward scores across multiple generations.

## Relationships

### Stability →
- **Faithfulness** (constructs) — *causes*
  > Therefore, stability plays a pivotal role in ensuring explanation faithfulness.
  - [Faithful Vision-Language Interpretation via Concept Bottleneck Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/678cffc05549fdabda971127602084c6-Paper-Conference.pdf)
- **MMLU** (measurements) — *measured_by*
  > "Extensive experiments on updated MMLU and BIG-Bench demonstrate the stability of the proposed strategies"
  - [Automating Dataset Updates Towards Reliable and Timely Evaluation of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/1e89c12621c0315373f20f0aeabe5dbe-Paper-Datasets_and_Benchmarks_Track.pdf)
- **BIG-bench** (measurements) — *measured_by*
  > "Extensive experiments on updated MMLU and BIG-Bench demonstrate the stability of the proposed strategies"
  - [Automating Dataset Updates Towards Reliable and Timely Evaluation of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/1e89c12621c0315373f20f0aeabe5dbe-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Instruction following ability** (constructs) — *causes*
  > This suggests that the top layers’ weights indeed lack sufficient stability gradient to maintain instruction-following ability initially. (Section 3.2)
  - [Efficient Domain Continual pretraining by Mitigating the Stability Gap](https://aclanthology.org/2025.acl-long.1578.pdf)

### Associated with
- **Plasticity** (constructs)
  > This technique demonstrates a negligible reduction in the FP metric, signifying a well-maintained balance between plasticity and stability. (Section 6)
  - [Unlocking the Power of Function Vectors for Characterizing and Mitigating Catastrophic Forgetting in Continual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/74fc5575632191d96881d8015f79dde3-Paper-Conference.pdf)
- **Coherence** (constructs)
  > These models, however, often suffer from instability or lack of coherence, that is the ability of the models to generate semantically equivalent outputs when receiving diverse yet semantically equivalent input variations. (Abstract)
  - [Analyzing and Improving Coherence of Large Language Models in Question Answering](https://aclanthology.org/2025.naacl-long.588.pdf)
- **In-context learning** (constructs)
  > We prove that the reasoning efficacy (measured by empirical prediction loss) can be bounded by an LLM-oriented semantic similarity and an inference stability of demonstrations, which is general for both one-shot and few-shot scenarios. (Abstract)
  - [What Makes In-context Learning Effective for Mathematical Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25ac/liu25ac.pdf)
- **Generation diversity** (constructs)
  > Furthermore, stability implies an intuitive notion of diversity, suggesting that tokens with similar logits should have comparable probabilities of being selected.
  - [Permute-and-Flip: An optimally stable and watermarkable decoder for LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/50be7e77b9c883144940be925b608acc-Paper-Conference.pdf)
- **Self-improvement** (constructs)
  > We conducted further analysis to investigate the improvements of CER with various metrics, such as cross-template success rate, stability (preservation of old knowledge), and plasticity (acquisition of new knowledge) (Grossberg, 1982; Rolnick et al., 2019) (§5.2, §5.3), demonstrating its generalizability and effectiveness as a self-improvement system.
  - [Contextual Experience Replay for Self-Improvement of Language Agents](https://aclanthology.org/2025.acl-long.694.pdf)
- **Consistency** (constructs)
  > Our objective is to define a measure, denoted as S(x, f), for an input x and a given fine-tuned model f, that would preemptively quantify the consistency of the prediction ˆf(x) over a broad class of equally-well-performing fine-tuned models. (Section 3)
  - [Quantifying Prediction Consistency Under Fine-tuning Multiplicity in Tabular LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hamman25a/hamman25a.pdf)
