# CommonsenseQA
**Type:** Measurement  
**Referenced in:** 143 papers  
**Also known as:** CommonSenseQA, CSQA, Commonsense QA, Commonsense-QA, CommonSense-QA, CommonsenseQA (CSQA), CMSQA, CQA  

## State of the Field

**What it is.** Across the surveyed work, CommonsenseQA is most commonly described as a multiple-choice question answering benchmark or dataset for commonsense reasoning or commonsense knowledge. Definitions usually portray it as everyday or daily-life questions with distractor answers, often in a 5-choice format, and some papers say it has more than 10K questions or specifically 12,102; a smaller line describes it as assessing general understanding or general knowledge. Some papers further describe it as built upon ConceptNet, and a few add that the questions are intended to resist superficial cues or simple fact retrieval.

**What it is claimed to measure.** Papers use CommonsenseQA to measure 14 constructs and 4 behavioral indicators. The dominant construct target is commonsense reasoning, with smaller lines also using it for general ability, general reasoning, generalization, and reasoning. The behavioral-indicator links keep it mostly inside question-answering formats, so the reported measurement claims spread beyond a single construct even while commonsense reasoning remains the prevailing framing.

**Space of uses.** Most papers use CommonsenseQA as one benchmark within a larger evaluation battery, often paired with StrategyQA or OpenBookQA for commonsense reasoning. Some papers also position it as a general-domain check beyond narrower domains, and papers report running it through lm-evaluation-harness, OLMES, and OpenCompass; one study also uses it as the basis for a derived benchmark suite.

**Concerns raised.** A recurring concern is contamination: one paper says it applies probes to CommonsenseQA test sets to look for evidence of contamination.

## Sources

**[Enhancing Small Medical Learners with Privacy-preserving Contextual Prompting](https://proceedings.iclr.cc/paper_files/paper/2024/file/79322f3668888f8f7fc99bbd98fbbaed-Paper-Conference.pdf)**
> A commonsense question answering benchmark used to evaluate commonsense reasoning.

**[Large Language Models Cannot Self-Correct Reasoning Yet](https://proceedings.iclr.cc/paper_files/paper/2024/file/8b4add8b0aa8749d80a34ca5d941c355-Paper-Conference.pdf) (as "CommonSenseQA")**
> CommonSenseQA is a commonsense question-answering benchmark used here to evaluate general understanding.

**[L4Q: Parameter Efficient Quantization-Aware Fine-Tuning on Large Language Models](https://aclanthology.org/2025.acl-long.99.pdf) (as "CSQA")**
> A benchmark named Commonsense QA that evaluates a model's commonsense reasoning capabilities through a collection of multiple-choice question-answering tasks.

**[Nemotron-CC: Transforming Common Crawl into a Refined Long-Horizon Pretraining Dataset](https://aclanthology.org/2025.acl-long.123.pdf) (as "Commonsense QA")**
> A multiple-choice question answering dataset that requires commonsense knowledge to predict the correct answers.

**[Understanding Overadaptation in Supervised Fine-Tuning: The Role of Ensemble Methods](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hao25d/hao25d.pdf) (as "Commonsense-QA")**
> Question-answering dataset with over 10,000 real-world commonsense questions requiring models to identify relevant knowledge and distinguish plausible distractors.

**[EDiT: A Local-SGD-Based Efficient Distributed Training Method for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a4f419c398382295e1e350d56ecb65f2-Paper-Conference.pdf) (as "CommonSense-QA")**
> A multiple-choice question answering dataset that requires commonsense knowledge to predict the correct answer, with questions designed to be difficult for models that rely on superficial cues.

**[Progress or Regress? Self-Improvement Reversal in Post-training](https://proceedings.iclr.cc/paper_files/paper/2025/file/1fa0c4e5a7e189729230d018b229abc7-Paper-Conference.pdf) (as "CommonsenseQA (CSQA)")**
> A multiple-choice question answering benchmark designed to evaluate a model's commonsense reasoning and general knowledge.

**[Mixture of Demonstrations for In-Context Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/a0da098e0031f58269efdcba40eedf47-Paper-Conference.pdf) (as "CMSQA")**
> CommonsenseQA (CMSQA) is a multiple-choice question answering dataset that targets commonsense knowledge.

**[QCRD: Quality-guided Contrastive Rationale Distillation for Large Language Models](https://aclanthology.org/2025.emnlp-main.724.pdf) (as "CQA")**
> Commonsense Question Answering dataset that assesses a model's ability to answer questions requiring general world knowledge and everyday reasoning.

## Relationships

### → CommonsenseQA
- **Commonsense reasoning** (constructs) — *measured_by*
  > For commonsense reasoning, we consider CSQA for multiple-choice questions (Talmor et al., 2019) and StrategyQA for true or false questions (Geva et al., 2021) (Section 4.1).
  - [BadChain: Backdoor Chain-of-Thought Prompting for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/791d3337291b2c574545aeecfa75484c-Paper-Conference.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > We conduct experiments on MMLU (Hendrycks et al., 2020), ARC-Challenge (Clark et al., 2018), and CommonsenseQA (CSQA) (Talmor et al., 2019), which are all MCQ benchmarks widely used for LLM evaluation.
  - [Large Language Models Are Not Robust Multiple Choice Selectors](https://proceedings.iclr.cc/paper_files/paper/2024/file/54dd9e0cff6d9214e20d97eb2a3bae49-Paper-Conference.pdf)
- **Commonsense question answering** (behaviors tasks) — *measured_by*
  > CommonSenseQA (Talmor et al., 2019): This dataset offers a collection of multi-choice questions that test commonsense reasoning. (Section 3.1)
  - [Large Language Models Cannot Self-Correct Reasoning Yet](https://proceedings.iclr.cc/paper_files/paper/2024/file/8b4add8b0aa8749d80a34ca5d941c355-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > CommonsenseQA [63] is to test models’ ability to answer questions using only the parameterized knowledge instead of the context knowledge. (Appendix E.2)
  - [TAIA: Large Language Models are Out-of-Distribution Data Learners](https://proceedings.neurips.cc/paper_files/paper/2024/file/be0a8ecf8b2743a4117557c5eca0fb79-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > We set N g = 4 general evaluation tasks, covering Hellaswag (Zellers et al., 2019), CommonsenseQA (Talmor et al., 2018), Alpaca (Hendrycks et al., 2020), and BBH-Object-Count (Srivastava et al., 2022) (Section 3)
  - [Unlocking the Power of Function Vectors for Characterizing and Mitigating Catastrophic Forgetting in Continual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/74fc5575632191d96881d8015f79dde3-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > Our evaluations on standard reasoning datasets (GSM8K, CSQA, and LLC) with various LLMs and prompts show that TREACLE enables cost savings of up to 85% compared to baselines, while maintaining high accuracy. (Abstract)
  - [Efficient Contextual LLM Cascades through Budget-Constrained Policy Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/a6deba3b2408af45b3f9994c2152b862-Paper-Conference.pdf)
- **General reasoning** (constructs) — *measured_by*
  > To evaluate the generalization ability of our method and mitigate the risk of catastrophic forgetting, we conduct experiments on commonsense and reasoning datasets, including CSQA (Talmor et al., 2018), Hellaswag (Zellers et al., 2019), and MMLU-pro (Wang et al., 2024). (Section 5.6)
  - [CulFiT: A Fine-grained Cultural-aware LLM Training Paradigm via Multilingual Critique Data Synthesis](https://aclanthology.org/2025.acl-long.1092.pdf)
- **Generalization** (constructs) — *measured_by*
  > In this section, we investigate whether our method is generally applicable beyond the medical domain. We use two general domain datasets, CommonsenseQA (CSQA) (Talmor et al., 2018) and OpenbookQA (OBQA) (Mihaylov et al., 2018)... (Section 4.5)
  - [Enhancing Small Medical Learners with Privacy-preserving Contextual Prompting](https://proceedings.iclr.cc/paper_files/paper/2024/file/79322f3668888f8f7fc99bbd98fbbaed-Paper-Conference.pdf)
- **Short-context ability** (constructs) — *measured_by*
  > We select 8 short-context tasks commonly used for evaluating the general capabilities of models. These include... CommonsenseQA (CSQA)... (Section 4.1)
  - [Make Your LLM Fully Utilize the Context](https://proceedings.neurips.cc/paper_files/paper/2024/file/71c3451f6cd6a4f82bb822db25cea4fd-Paper-Conference.pdf)
- **Knowledge reasoning** (constructs) — *measured_by*
  > For knowledge reasoning, we utilize Winogrande (Sakaguchi et al., 2019) (abbreviated as Wino) and CommonsenseQA (Talmor et al., 2019) (abbreviated as Comm). (Section 4)
  - [Think Thrice Before You Act: Progressive Thought Refinement in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/6882dbdc34bcd094e6f858c06ce30edb-Paper-Conference.pdf)
- **In-context learning** (constructs) — *measured_by*
  > IP = 1 N g PN g j=1 ˆa T e j N , which is the average in-context performance on N g general evaluation tasks... We set N g = 4 general evaluation tasks, covering Hellaswag (Zellers et al., 2019), CommonsenseQA (Talmor et al., 2018), Alpaca (Hendrycks et al., 2020), and BBH-Object-Count (Srivastava et al., 2022) (Section 3)
  - [Unlocking the Power of Function Vectors for Characterizing and Mitigating Catastrophic Forgetting in Continual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/74fc5575632191d96881d8015f79dde3-Paper-Conference.pdf)
- **Out-of-distribution detection** (behaviors tasks) — *measured_by*
  > We fine-tune the LLMs on OBQA (as the ID dataset) and test them on ARC-C, ARC-E, and CSQA (as OOD dataset).
  - [Calibrating LLMs with Information-Theoretic Evidential Deep Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/0cbdd1e6613c42fe975337671790f406-Paper-Conference.pdf)
- **Natural language understanding** (constructs) — *measured_by*
  > To evaluate multitask performance, we test on several NLP benchmarks, including MMLU (Hendrycks et al., 2020), MMLU-Pro (Wang et al., 2024), ARC-Easy, ARC-Challenge (Clark et al., 2018), OpenBookQA (Mihaylov et al., 2018), SWAG (Zellers et al., 2018), and CommonsenseQA (Talmor et al., 2018). These benchmarks consist of multiple-choice questions, assessing various aspects of the model's natural language understanding.
  - [HMoRA: Making LLMs More Effective with Hierarchical Mixture of LoRA Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/e43a33994a28f746dcfd53eb51ed3c2d-Paper-Conference.pdf)
- **World knowledge** (constructs) — *measured_by*
  > We measure general knowledge using the CommonsenseQA (CSQA) (Talmor et al., 2019) dataset... (Section 4.1)
  - [Progress or Regress? Self-Improvement Reversal in Post-training](https://proceedings.iclr.cc/paper_files/paper/2025/file/1fa0c4e5a7e189729230d018b229abc7-Paper-Conference.pdf)
- **Data contamination** (constructs) — *measured_by*
  > We then apply this method on two other datasets (CommonsenseQA (Talmor et al., 2019) and ARC- Challenge (Clark et al., 2018)) to probe for evidence of contamination across our three target models (Table 5). (Section 4.3)
  - [Information-Guided Identification of Training Data Imprint in (Proprietary) Large Language Models](https://aclanthology.org/2025.naacl-long.99.pdf)
- **Self-correction ability** (constructs) — *measured_by*
  > We evaluate self-correction capability on both classification and generation tasks, including domains in mathematics, coding, instruction following, common-sense reasoning, and knowledge. To be specific, the dataset we utilized include ... CommonsenseQA (Talmor et al., 2019). (Section 4.1)
  - [Confidence v.s. Critique: A Decomposition of Self-Correction Capability for LLMs](https://aclanthology.org/2025.acl-long.203.pdf)
- **Zero-shot generalization** (constructs) — *measured_by*
  > To further evaluate the generalizability of GCR, we conduct zero-shot transfer experiments on three new KGQA datasets: FreebaseQA, CSQA and MedQA (Section 5.1).
  - [Graph-constrained Reasoning: Faithful Reasoning on Knowledge Graphs with Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/luo25t/luo25t.pdf)
- **Inductive reasoning** (constructs) — *measured_by*
  > “CommonsenseQA, a 5-choice multiple-choice benchmark, peaks in Inductive Reasoning”
  - [Benchmark Profiling: Mechanistic Diagnosis of LLM Benchmarks](https://aclanthology.org/2025.emnlp-main.789.pdf)
- **Editing locality** (constructs) — *measured_by*
  > For KE, we also need to consider locality, which ensures edits do not affect unrelated knowledge and abilities. To assess this, we evaluate the model on general benchmarks, including CommonsenseQA (Talmor et al., 2019), BigBench-Hard (Suzgun et al., 2023), MMLU (Hendrycks et al., 2021), and GSM8k (Cobbe et al., 2021) (Section 4.1).
  - [CaKE: Circuit-aware Editing Enables Generalizable Knowledge Learners](https://aclanthology.org/2025.emnlp-main.572.pdf)

### Associated with
- **lm-evaluation-harness** (measurements)
  > We use lm-evaluation-harness to report results on ... CommonSenseQA
  - [QERA: an Analytical Framework for Quantization Error Reconstruction](https://proceedings.iclr.cc/paper_files/paper/2025/file/21718991f6acf19a42376b5c7a8668c5-Paper-Conference.pdf)
- **OpenCompass** (measurements)
  > "We use Opencompass (Contributors, 2023) to test performance on several widely-used zero-shot benchmarks: PIQA ..., ARC-challenge (ARC-C) ..., ARC-easy (ARC-E) ..., WinoGrande (WG) ..., HellaSwag (HLSG) ..., and CommonSenseQA (CSQA) ..."
  - [MatryoshkaKV: Adaptive KV Compression via Trainable Orthogonal Projection](https://proceedings.iclr.cc/paper_files/paper/2025/file/d7b351608d824a4680344a02b180a947-Paper-Conference.pdf)
- **OLMES** (measurements)
  > "We use the OLMES suite of 10 multiple choice question answering benchmarks (Gu et al., 2024): ... CommonsenseQA (Talmor et al., 2019), SocialIQA ..."
  - [DataDecide: How to Predict Best Pretraining Data with Small Experiments](https://raw.githubusercontent.com/mlresearch/v267/main/assets/magnusson25a/magnusson25a.pdf)
