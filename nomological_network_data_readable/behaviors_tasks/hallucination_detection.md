# Hallucination detection
**Type:** Behavior  
**Referenced in:** 35 papers  
**Also known as:** Hallucination Detection, Knowledge conflict detection, Medical hallucination detection, Sentence-level verification  

## State of the Field

**Space of definitions.** Across papers, the dominant framing is checking whether generated content is factually incorrect, fabricated, unsupported, or not grounded in the available context. Most formulations operationalize this as labeling an answer, statement, response, token, or sentence as hallucinated versus non-hallucinated, or tagging unsupported content such as object phrases in an image description. Smaller variants narrow the success condition to cases such as marking explanation sentences with knowledge conflict, or requiring the model to decline absent-context questions, with one paper specifying the answer should be 'XXX is not mentioned in the provided context.'

**Variants.** Papers study this behavior in several settings and under several names. A prevalent cluster is multimodal or vision-grounded detection, including object-phrase tagging in image descriptions, identifying inaccuracies relative to an image, and describing concrete inconsistencies in rendered 2D views; other named variants are medical hallucination detection, sentence-level verification, and knowledge conflict detection. Some papers also place it in question answering and refusal settings, while others relate it to several other text tasks.

**Space of elicitation and scores.** Papers link hallucination detection to 10 measurement instruments. The most frequently named are HaluEval, SelfCheckGPT, FoCus, GAVIE, and HallusionBench, with five other instruments also linked; among these, HaluEval is described as a dataset, GAVIE and HallusionBench appear as benchmarks, and SelfCheckGPT and FoCus as detection methods. The measured_by relations include benchmark-style evaluations, while SelfCheckGPT and FoCus are also linked through related-method comparisons.

**What it is taken as evidence of.** At the construct level, papers link hallucination detection to 4 constructs, but the links use different directions and relation types rather than a shared evidence-of framing. One paper claims a causal relationship from hallucination detection to Coherence, another claims a causal relationship from In-context learning to hallucination detection, and other papers relate hallucination detection to Linguistic quality and Semantic uncertainty. Because of this mix, papers do not present a single agreed construct that hallucination detection reflects.

## Sources

**[Image Textualization: An Automatic Framework for Generating Rich and Detailed Image Descriptions](https://proceedings.neurips.cc/paper_files/paper/2024/file/c37d94c04effc86d72ab2258ba9b76c7-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Hallucination Detection")**
> The observable task of identifying and tagging object phrases in a description that do not correspond to objects in the image.

**[Hallo3D: Multi-Modal Hallucination Detection and Mitigation for Consistent 3D Content Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/d75660d6eb0ce31360c768fef85301dd-Paper-Conference.pdf)**
> The task of using a large multi-modal model to identify and describe concrete hallucinations or inconsistencies within a rendered 2D image.

**[Knowledge Graph Finetuning Enhances Knowledge Manipulation in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/e44337573fcac83f219c8effa4ebf90d-Paper-Conference.pdf) (as "Knowledge conflict detection")**
> Identifying explanation sentences that contradict or are unsupported by comparison triples from the reasoning graph.

**[MedHallu: A Comprehensive Benchmark for Detecting Medical Hallucinations in Large Language Models](https://aclanthology.org/2025.emnlp-main.143.pdf) (as "Medical hallucination detection")**
> The observable task of judging whether a given answer to a medical question is hallucinated (factually incorrect) or not, based on factual accuracy.

**[Efficient Real-time Refinement of Language Model Text Generation](https://aclanthology.org/2025.emnlp-main.1753.pdf) (as "Sentence-level verification")**
> The observable process of checking the factual correctness of individual sentences as they are generated during text production.

## Relationships

### Hallucination detection →
- **HaluEval** (measurements) — *measured_by*
  > Detecting and flagging hallucinations (HaluEval dataset (Li et al., 2023)). (Section 1)
  - [The Logical Implication Steering Method for Conditional Interventions on Transformer Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/kalajdzievski25a/kalajdzievski25a.pdf)
- **SelfCheckGPT** (measurements) — *measured_by*
  > We compare the proposed AGSER approach with SBERT (Reimers and Gurevych, 2019), SelfCheckGPT (Manakul et al., 2023), INSIDE (Chen et al., 2024) and InterrogateLLM (Yehuda et al., 2024) in zero-shot hallucination detection.
  - [Attention-guided Self-reflection for Zero-shot Hallucination Detection in Large Language Models](https://aclanthology.org/2025.emnlp-main.1063.pdf)
- **Linear probing** (measurements) — *measured_by*
  > "We apply a linear probing method (Conneau et al., 2018; Zhu and Li, 2023; Allen-Zhu and Li, 2023) to investigate whether the residual stream contains a signal of knowledge conflict."
  - [Steering Knowledge Selection Behaviours in LLMs via SAE-Based Representation Engineering](https://aclanthology.org/2025.naacl-long.264.pdf)
- **TruthfulQA** (measurements) — *measured_by*
  > On the challenging TruthfulQA benchmark (Lin et al., 2022a), our approach achieves a significant +12.8% improvement in hallucination detection accuracy (AUROC) compared to state-of-the-art methods. (Section 1. Introduction)
  - [Steer LLM Latents for Hallucination Detection](https://raw.githubusercontent.com/mlresearch/v267/main/assets/park25a/park25a.pdf)
- **HallusionBench** (measurements) — *measured_by*
  > To evaluate the visual perception capabilities of RePer, we conducted assessments across five widely-used benchmarks, covering a range of tasks: ... hallucination detection (HallusionBench (Guan et al., 2024), MMHal-Bench (Sun et al., 2023b), GAVIE (Liu et al., 2023a)) (Section 4.2)
  - [Perception in Reflection](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wei25r/wei25r.pdf)
- **MMHal-Bench** (measurements) — *measured_by*
  > To evaluate the visual perception capabilities of RePer, we conducted assessments across five widely-used benchmarks, covering a range of tasks: ... hallucination detection (HallusionBench (Guan et al., 2024), MMHal-Bench (Sun et al., 2023b), GAVIE (Liu et al., 2023a)) (Section 4.2)
  - [Perception in Reflection](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wei25r/wei25r.pdf)
- **GAVIE** (measurements) — *measured_by*
  > To evaluate the visual perception capabilities of RePer, we conducted assessments across five widely-used benchmarks, covering a range of tasks: ... hallucination detection (HallusionBench (Guan et al., 2024), MMHal-Bench (Sun et al., 2023b), GAVIE (Liu et al., 2023a)) (Section 4.2)
  - [Perception in Reflection](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wei25r/wei25r.pdf)
- **AUROC** (measurements) — *measured_by*
  > "we evaluate the performance with the area under the curve of the receiver operator characteristic (AUROC)"
  - [Steer LLM Latents for Hallucination Detection](https://raw.githubusercontent.com/mlresearch/v267/main/assets/park25a/park25a.pdf)
- **MedHallu** (measurements) — *measured_by*
  > To address this, we introduce MedHallu, one of the first benchmark specifically designed for medical hallucination detection.
  - [MedHallu: A Comprehensive Benchmark for Detecting Medical Hallucinations in Large Language Models](https://aclanthology.org/2025.emnlp-main.143.pdf)
- **NegHalu** (measurements) — *measured_by*
  > we conduct this analysis by reconstructing existing hallucination detection benchmarks with negated expressions and introducing NegHalu, a dataset in which hallucination labels are newly assigned to account for the effects of negation.
  - [The Impact of Negated Text on Hallucination with Large Language Models](https://aclanthology.org/2025.emnlp-main.684.pdf)
- **Logit lens** (measurements) — *measured_by*
  > We employ a lens observation method to analyze LLMs’ processing of pre- and post-negated text across layers. The Logit Lens (nostalgebraist, 2020; Dar et al., 2023) projects internal model states onto the vocabulary space, tracking prediction changes layer by layer.
  - [The Impact of Negated Text on Hallucination with Large Language Models](https://aclanthology.org/2025.emnlp-main.684.pdf)
- **POPE** (measurements) — *measured_by*
  > POPE (Li et al., 2023): hallucination detection. (Section 4.3)
  - [VERITAS: Leveraging Vision Priors and Expert Fusion to Improve Multimodal Data](https://aclanthology.org/2025.emnlp-main.1002.pdf)
- **RAGTruth** (measurements) — *measured_by*
  > For our evaluations in the setting of hallucination detection with external references assumed available, we primarily consider the RAGTruth dataset [Wu et al., 2023]. (Section 5)
  - [LLM-Check: Investigating Detection of Hallucinations in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/3c1e1fdf305195cd620c118aaa9717ad-Paper-Conference.pdf)

### → Hallucination detection
- **In-context learning** (constructs) — *causes*
  > These results imply that In-Context Learning can immediately enhance hallucination detection performance for certain models, datasets, and tasks, particularly when balanced examples with pre-/post-negated text and hallucination/no-hallucination cases are included.
  - [The Impact of Negated Text on Hallucination with Large Language Models](https://aclanthology.org/2025.emnlp-main.684.pdf)

### Associated with
- **Semantic uncertainty** (constructs)
  > SEMANTIC UNCERTAINTY (Kuhn et al., 2023; Farquhar et al., 2024), which estimate the model’s predictive uncertainty on the generation for hallucination detection.
  - [A Probabilistic Framework for LLM Hallucination Detection via Belief Tree Propagation](https://aclanthology.org/2025.naacl-long.158.pdf)
- **Linguistic quality** (constructs)
  > Recent approaches have leveraged the latent space of LLMs for hallucination detection, but their embeddings, optimized for linguistic coherence rather than factual accuracy, often fail to clearly separate truthful and hallucinated content. (Abstract)
  - [Steer LLM Latents for Hallucination Detection](https://raw.githubusercontent.com/mlresearch/v267/main/assets/park25a/park25a.pdf)
- **Refusal** (behaviors tasks)
  > The hallucination detection task aims to test the model’s ability to decline answering questions that are not mentioned in the given context.
  - [LaRA: Benchmarking Retrieval-Augmented Generation and Long-Context LLMs – No Silver Bullet for LC or RAG Routing](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25dv/li25dv.pdf)
