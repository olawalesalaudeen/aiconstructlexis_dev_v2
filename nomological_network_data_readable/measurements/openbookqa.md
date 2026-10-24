# OpenBookQA
**Type:** Measurement  
**Referenced in:** 205 papers  
**Also known as:** OpenbookQA, Obqa, openBookQA, OpenBook QA, Openbook QA, OBQA  

## State of the Field

**What it is.** Across papers, the prevailing usage treats OpenBookQA, also written as OpenbookQA or OBQA, as a multiple-choice, open-book question answering benchmark or dataset, usually centered on elementary science questions and modeled after open-book exams. Most definitions say it requires reasoning over a provided set or small corpus of science facts together with common, external, or broad common knowledge; several papers further describe it as testing factual and commonsense reasoning, and some call it multi-step or multi-hop reasoning. A smaller set of papers instead frames it as open-domain QA, reading comprehension, or book comprehension. Descriptions also differ on size and placement: one paper says it contains 500 multiple-choice questions, another says it comprises 5,957 multiple-choice questions with four options, and one paper treats OBQA as a subset of VoiceBench.

**What it is claimed to measure.** Papers connect OpenBookQA to 12 constructs and 10 behavioral indicators. The dominant claim is that papers use it to measure Commonsense reasoning; recurring but less concentrated claims say it measures General ability, Generalization, Reasoning, and Calibration, so the claims center on one construct but also extend across several others. At the behavioral level, it is reported as measuring Question answering, Language understanding task performance, Multiple-choice question answering, Machine reading comprehension, and Classification.

**Space of uses.** Most papers position OpenBookQA as one task in broader benchmark bundles, often alongside PIQA, HellaSwag, and ARC-Easy/ARC-Challenge, and they commonly report accuracy in zero-shot evaluations. A smaller line of work fine-tunes on it, uses it as an additional training task, or treats it as a held-out or validation benchmark for generalization. Papers also report that OpenBookQA is measured by 2 other instruments, most often lm-evaluation-harness, with a smaller mention of OLMES.

## Sources

**[Bayesian Low-rank Adaptation for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/07c256a163a7559186ec1c71e95b9ec9-Paper-Conference.pdf)**
> A zero-shot multiple-choice question answering benchmark based on open-book science questions.

**[Efficient Streaming Language Models with Attention Sinks](https://proceedings.iclr.cc/paper_files/paper/2024/file/5e5fd18f863cbe6d8ae392a93fd271c9-Paper-Conference.pdf) (as "OpenbookQA")**
> A question-answering dataset modeled after open book exams, requiring reasoning over a set of elementary science facts.

**[Evaluating Large Language Models through Role-Guide and Self-Reflection: A Comparative Study](https://proceedings.iclr.cc/paper_files/paper/2025/file/0b8705a611ed1ce19cdb759031078705-Paper-Conference.pdf) (as "openBookQA")**
> A question-answering dataset that requires combining a corpus of provided science facts with external common knowledge to assess understanding and reasoning.

**[Efficient Learning with Sine-Activated Low-Rank Matrices](https://proceedings.iclr.cc/paper_files/paper/2025/file/112d8e0c7563de6e3408b49a09b4d8a3-Paper-Conference.pdf) (as "OBQA")**
> OpenBookQA, a benchmark for answering elementary science questions requiring commonsense and open-book knowledge.

**[Scaling up Masked Diffusion Models on Text](https://proceedings.iclr.cc/paper_files/paper/2025/file/ce1c1ff5d94079dea348a2317a889281-Paper-Conference.pdf) (as "Obqa")**
> The OpenBookQA dataset, a commonsense question-answering benchmark that requires reasoning with a small set of common knowledge facts.

**[u-$\mu$P: The Unit-Scaled Maximal Update Parametrization](https://proceedings.iclr.cc/paper_files/paper/2025/file/e3130a164f5c724e37271b93bc76dd28-Paper-Conference.pdf) (as "OpenBook QA")**
> A benchmark requiring open-book question answering based on provided facts.

**[SIMPLEMIX: Frustratingly Simple Mixing of Off- and On-policy Data in Language Model Preference Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25au/li25au.pdf) (as "Openbook QA")**
> A question answering dataset modeled after open-book exams, requiring reasoning with a given set of elementary-level science facts.

## Relationships

### → OpenBookQA
- **Commonsense reasoning** (constructs) — *measured_by*
  > We further assess the zero-shot common sense reasoning ability on tasks covering HellaSwag (Zellers et al., 2019), PIQA (Bisk et al., 2020), WinoGrande (Sakaguchi et al., 2019), ARC (Clark et al., 2018), BoolQ (Clark et al., 2019), and OpenBookQA (Mihaylov et al., 2018). (Section 4.1)
  - [QA-LoRA: Quantization-Aware Low-Rank Adaptation of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/e6c2e85db1f1039177c4495ccd399ac4-Paper-Conference.pdf)
- **Natural language understanding** (constructs) — *measured_by*
  > To evaluate multitask performance, we test on several NLP benchmarks, including MMLU (Hendrycks et al., 2020), MMLU-Pro (Wang et al., 2024), ARC-Easy, ARC-Challenge (Clark et al., 2018), OpenBookQA (Mihaylov et al., 2018), SWAG (Zellers et al., 2018), and CommonsenseQA (Talmor et al., 2018). These benchmarks consist of multiple-choice questions, assessing various aspects of the model's natural language understanding.
  - [HMoRA: Making LLMs More Effective with Hierarchical Mixture of LoRA Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/e43a33994a28f746dcfd53eb51ed3c2d-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > In question answering, we adopt the test splits of ECQA (Aggarwal et al., 2021), QASC (Khot et al., 2020), OpenbookQA (Mihaylov et al., 2018), and StrategyQA (Geva et al., 2021) for evaluation. (Section 4)
  - [Bridging and Modeling Correlations in Pairwise Data for Direct Preference Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/d41760ec1e2db105e63e98393648c763-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > Seven reasoning datasets used in the experiments include OpenbookQA (Banerjee et al., 2020), WinoGrande (Sakaguchi et al., 2021) HellaSwag (Zellers et al., 2019), PIQA (Bisk et al., 2020), MathQA (Amini et al., 2019), ARC-e, ARC-c (Clark et al., 2018). (Section 4.1)
  - [Basis Sharing: Cross-Layer Parameter Sharing for Large Language Model Compression](https://proceedings.iclr.cc/paper_files/paper/2025/file/238c98450b1d9e8055f94d22f303bb57-Paper-Conference.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > “The multiple-choice tasks include: ... open book question answering (OpenBookQA; Mihaylov et al. 2018)”
  - [Scaling Stick-Breaking Attention: An Efficient Implementation and In-depth Study](https://proceedings.iclr.cc/paper_files/paper/2025/file/0b9a261b9aca858b7e6ee44d8b2055be-Paper-Conference.pdf)
- **Machine reading comprehension** (behaviors tasks) — *measured_by*
  > we use seven commonsense reasoning tasks from the popular framework Harness (Gao et al., 2024), including four reading comprehension tasks (ARC-e, ARC-c (Clark et al., 2018), OBQA (Mihaylov et al., 2018), and BoolQ (Clark et al., 2019))... (Section 4.1)
  - [Combatting Dimensional Collapse in LLM Pre-Training Data via Submodular File Selection](https://proceedings.iclr.cc/paper_files/paper/2025/file/136729ae4b0fee25a0d28077442506da-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > In this section, we investigate whether our method is generally applicable beyond the medical domain. We use two general domain datasets, CommonsenseQA (CSQA) (Talmor et al., 2018) and OpenbookQA (OBQA) (Mihaylov et al., 2018)... (Section 4.5)
  - [Enhancing Small Medical Learners with Privacy-preserving Contextual Prompting](https://proceedings.iclr.cc/paper_files/paper/2024/file/79322f3668888f8f7fc99bbd98fbbaed-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > To evaluate LLMs’ general capabilities, we select several widely used benchmark, i.e., HellaSwag (Zellers et al., 2019), Race (Lai et al., 2017), MMLU (Hendrycks et al., 2021), GPQA (Rein et al., 2024), OpenBookQA (Mihaylov et al., 2018), BoolQ (Clark et al., 2019), AG News (Zhang et al., 2015), IMDB (Maas et al., 2011), and Perplexity (Chen et al., 1998). (Section 4.1)
  - [The Tug of War Within: Mitigating the Fairness-Privacy Conflicts in Large Language Models](https://aclanthology.org/2025.acl-long.590.pdf)
- **Zero-shot classification** (behaviors tasks) — *measured_by*
  > We also compare the zero-shot accuracy on common reasoning zero-shot classiﬁcation datasets including BoolQ [50], PIQA [51], HellaSwag [52], WinoGrande [53], ARC-easy [54], ARC-challenge [54], and OpenbookQA [55]. (Section 4.1)
  - [Search for Efficient Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fb64a43508e0cfe53ee6179ff31ea900-Paper-Conference.pdf)
- **Zero-shot question answering** (behaviors tasks) — *measured_by*
  > Moreover, we also evaluate the accuracy for 7 zero-shot QA datasets: ARC-c (Clark et al., 2018), ARC-e (Clark et al., 2018), BoolQ (Clark et al., 2019), Hellaswag (Zellers et al., 2019), OBQA (Mihaylov et al., 2018), PIQA (Bisk et al., 2020), and Winogrande (Sakaguchi et al., 2020). (Section 4.1)
  - [ARB-LLM: Alternating Refined Binarizations for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ea5ffdf7da91256ecd2770f9fd2dade9-Paper-Conference.pdf)
- **World knowledge** (constructs) — *measured_by*
  > Then, we evaluate each instruction-tuned model on a range of tasks to evaluate the model’s general/world knowledge (MMLU (Hendrycks et al., 2020), OpenBookQA (Mihaylov et al., 2018))
  - [Towards Scalable Exact Machine Unlearning Using Parameter-Efficient Fine-Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/d33b741600f100b31256c70a46f66ec9-Paper-Conference.pdf)
- **Factuality** (constructs) — *measured_by*
  > Does CoS affect factuality? Given that CoS influences content generation, in Appendix C.2 we conduct study on OpenbookQA (Mihaylov et al., 2018) by giving CoS different types of contexts and adjusting the λ. (Sec 4.1)
  - [Context Steering: Controllable Personalization at Inference Time](https://proceedings.iclr.cc/paper_files/paper/2025/file/db178cd03313e23cffb8937e93f0d464-Paper-Conference.pdf)
- **Chain-of-thought reasoning** (constructs) — *measured_by*
  > OBQA (Mihaylov et al., 2018) (multi-step reasoning). (Section 5.1)
  - [HiRA: Parameter-Efficient Hadamard High-Rank Adaptation for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/48c368f105e8145b945227b73255635a-Paper-Conference.pdf)
- **Knowledge reasoning** (constructs) — *measured_by*
  > OpenBookQA (Mihaylov et al., 2018) for fact reasoning (Section 3.1)
  - [Weak to Strong Generalization for Large Language Models with Multi-capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/1ebcb8f051d0c178474619bbfb32b340-Paper-Conference.pdf)
- **Classification** (behaviors tasks) — *measured_by*
  > ...six classification datasets (OpenbookQA (Mihaylov et al., 2018), WinoGrande (Sakaguchi et al., 2020), HellaSwag (Zellers et al., 2019), Arc_e (Clark et al., 2018), PIQA (Bisk et al., 2020), MathQA (Amini et al., 2019))...
  - [SVD-LLM V2: Optimizing Singular Value Truncation for Large Language Model Compression](https://aclanthology.org/2025.naacl-long.217.pdf)
- **Scientific question answering** (behaviors tasks) — *measured_by*
  > OpenBookQA (Mihaylov et al., 2018) Open-book science questions. (Table 2)
  - [Demystifying Small Language Models for Edge Deployment](https://aclanthology.org/2025.acl-long.718.pdf)
- **Zero-shot task performance** (behaviors tasks) — *measured_by*
  > evaluate zero-shot performance on seven downstream tasks: BoolQ (Clark et al., 2019), ARC Easy and Challenge (Clark et al., 2018), HellaSwag (Zellers et al., 2019), WinoGrande (Sakaguchi et al., 2021), OpenbookQA (Mihaylov et al., 2018), and PIQA (Bisk et al., 2020) (Section 4.1).
  - [Determining Layer-wise Sparsity for Large Language Models Through a Theoretical Perspective](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25ax/huang25ax.pdf)
- **Calibration** (constructs) — *measured_by*
  > We evaluate the ECE and Accuracy using four diverse datasets: MMLU, MedMCQA, OpenBookQA, Arc-Challenge... (Section 6.1)
  - [Restoring Calibration for Aligned Large Language Models: A Calibration-Aware Fine-Tuning Approach](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xiao25b/xiao25b.pdf)
- **Commonsense knowledge** (constructs) — *measured_by*
  > “Finally, OpenBookQA evaluates the understanding of common knowledge (Mihaylov et al., 2018).”
  - [BERTs are Generative In-Context Learners](https://proceedings.neurips.cc/paper_files/paper/2024/file/04ea184dfb5f1babb78c093e850a83f9-Paper-Conference.pdf)
- **Reading comprehension** (constructs) — *measured_by*
  > “OpenbookQA (Mihaylov et al., 2018) can assess the book comprehension ability”
  - [On Large Language Model Continual Unlearning](https://proceedings.iclr.cc/paper_files/paper/2025/file/fc28053a08f59fccb48b11f2e31e81c7-Paper-Conference.pdf)

### Associated with
- **lm-evaluation-harness** (measurements)
  > Evaluation is performed on ARC (Clark et al., 2018), BoolQ (BQ) (Clark et al., 2019), OpenbookQA (OBQA) (Mihaylov et al., 2018), PIQA (Bisk et al., 2020a), WinoGrande (WG) (Sakaguchi et al., 2021), LAMBADA (LMBD) (Paperno et al., 2016b), 5-shot MMLU (Hendrycks et al., 2020), and 10-shot HellaSwag (HS) (Zellers et al., 2019a). These evaluations were conducted using the LM-Evaluation-Harness repository (Gao et al., 2024).
  - [Balcony: A Lightweight Approach to Dynamic Inference of Generative Language Models](https://aclanthology.org/2025.emnlp-main.1263.pdf)
- **OLMES** (measurements)
  > "We use the OLMES suite of 10 multiple choice question answering benchmarks (Gu et al., 2024): ... OpenBookQA (Mihaylov et al., 2018), BoolQ ..."
  - [DataDecide: How to Predict Best Pretraining Data with Small Experiments](https://raw.githubusercontent.com/mlresearch/v267/main/assets/magnusson25a/magnusson25a.pdf)
