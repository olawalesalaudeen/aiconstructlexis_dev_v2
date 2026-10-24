# Out-of-distribution generalization
**Type:** Construct  
**Referenced in:** 69 papers  
**Also known as:** Domain generalization, Out-of-distribution generalisation, Out-of-Distribution Generalization, OOD generalization, Out-of-domain generalization, Domain generalizability, Cross-category generalization, Policy transferability, OOD robustness, OOD Robustness, Out-of-distribution robustness, Distributional robustness  

## State of the Field

**Definition agreement:** Consensus. Most papers define out-of-distribution generalization as a model's ability to maintain performance when evaluated on unseen, shifted, or different data distributions, domains, or environments than those seen in training or fine-tuning. A few papers extend this to unseen tasks, task vectors, compositional combinations, or specific behaviors such as safety, but these are minority variations around the same core idea rather than a substantial competing definition.

**Space of definitions.** Across papers, the prevailing usage describes this construct as a model ability or capacity to maintain performance, or perform well, when test data, tasks, domains, or environments differ from training, often phrased as unseen domains, shifted target domains, or out-of-domain tasks. Most definitions follow that pattern across settings such as source-to-target domain transfer, held-out tasks or applications, new cities at test time, and formalization or reasoning problems drawn from different distributions. A smaller line of work recasts the same idea as robustness or stability under distribution shift, including unusual domains, input-level versus semantic-level shifts, or shifts in safety and compliance behavior, and a few definitions narrow it to policy transferability, cross-category generalization, structural generalization to new combinations, contextual adaptation, or, in one case, the observed OOD performance of discovered equations.

**Space of facets.** Papers use several nearby labels for overlapping uses, including domain generalization, out-of-domain generalization, OOD robustness, out-of-distribution robustness, distributional robustness, cross-category generalization, and policy transferability. One paper explicitly treats out-of-distribution robustness as a facet of robustness and divides it into input-level and semantic-level shifts, while another treats distributional robustness as stability of safety and compliance behavior under changing query distributions. Other papers organize the construct by the source of shift, such as source versus unseen target domains, unseen tasks or applications in zero-shot settings, held-out sustainability categories, new combinations of entities and relations, or increasingly dissimilar train and test sets, usually against an in-distribution versus OOD contrast.

**Space of measurement.** Papers link the construct to 10 measurement instruments and 1 behavioral indicator; the lone behavioral indicator is Action grounding, while the recorded measurements themselves are all instruments. Operationalization is mostly through benchmark test sets and held-out datasets that compare in-distribution and OOD performance, including AlpacaEval as an OOD instruction-following test set, AndroidControl for in- and out-of-domain UI control analysis, Blocksworld with 3-7 blocks treated as in-distribution and 8-20 as OOD, CNN/DailyMail as an OOD summarization test set, and CoGS for explicit ID/OOD evaluation, with additional benchmark instruments also linked. These operationalizations mostly line up with the dominant definition by testing performance on unseen or shifted data, though some narrow the shift to specific constructions such as paired unrelated images for SST-2 or domain-shifted text classification.

**Links.** It is linked to 9 constructs, with In-context learning and Robustness appearing most often. More than one paper claims a causal relationship from In-context learning to out-of-distribution generalization; individual papers also claim causal relationships from Compositionality and Grokking to it, one paper claims causal relationships both from Robustness to it and from it to Robustness, another claims a causal relationship from it to Generalization, and the lone linked behavioral indicator, Action grounding, is also claimed to have a causal relationship to it. Related links also connect it to In-context learning and several other constructs, and no correlational links are recorded.

## Sources

**[Nemesis: Normalizing the Soft-prompt Vectors of Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/010c855df402b443e0c16e5b7434e74c-Paper-Conference.pdf) (as "Domain generalization")**
> The ability of a vision-language model to maintain or transfer performance from a source domain (e.g., ImageNet) to unseen or shifted target domains (e.g., ImageNet-V2, ImageNet-Sketch).

**[Context is Environment](https://proceedings.iclr.cc/paper_files/paper/2024/file/03645743ea35690f30d795d6bac149a5-Paper-Conference.pdf)**
> The model's ability to perform well on test data drawn from environments or distributions not seen during training, by leveraging contextual information to adapt dynamically.

**[Understanding the Effects of RLHF on LLM Generalisation and Diversity](https://proceedings.iclr.cc/paper_files/paper/2024/file/5a68d05006d5b05dd9463dd9c0219db0-Paper-Conference.pdf) (as "Out-of-distribution generalisation")**
> The ability of a model to maintain performance on inputs drawn from a different distribution than its training data.

**[Competition Dynamics Shape Algorithmic Phases of In-Context Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a635abfdd007c9a698410c8bbe5ebc33-Paper-Conference.pdf) (as "Out-of-Distribution Generalization")**
> The latent capacity to perform accurately on data distributions not encountered during training.

**[Rethinking and Improving Autoformalization: Towards a Faithful Metric and a Dependency Retrieval-based Approach](https://proceedings.iclr.cc/paper_files/paper/2025/file/d630537fc4402cfa3ebbc7450a0cac91-Paper-Conference.pdf) (as "OOD generalization")**
> The ability to perform well on formalization problems drawn from distributions different from the training or in-domain benchmark data.

**[When is Task Vector Provably Effective for Model Editing? A Generalization Analysis of Nonlinear Transformers](https://proceedings.iclr.cc/paper_files/paper/2025/file/fb23cf87a9e04d7677b73c47acd060ef-Paper-Conference.pdf) (as "Out-of-domain generalization")**
> The ability to perform effectively on new tasks or data distributions that were not seen during fine-tuning, achieved by forming a linear combination of existing task vectors.

**[Plug-in and Fine-tuning: Bridging the Gap between Small Language Models and Large Language Models](https://aclanthology.org/2025.acl-long.271.pdf) (as "Domain generalizability")**
> The ability of a model to maintain or improve performance when applied to unseen domains or datasets different from its training domain.

**[Towards Robust ESG Analysis Against Greenwashing Risks: Aspect-Action Analysis with Cross-Category Generalization](https://aclanthology.org/2025.acl-long.723.pdf) (as "Cross-category generalization")**
> The ability of a model to extract aspect-action pairs in sustainability categories not seen during training, reflecting robustness to intra-domain distribution shifts.

**[EPO: Explicit Policy Optimization for Strategic Reasoning in LLMs via Reinforcement Learning](https://aclanthology.org/2025.acl-long.747.pdf) (as "Policy transferability")**
> The extent to which a model's learned strategies can be successfully applied to new, unseen domains or scenarios.

**[MultiTrust: A Comprehensive Benchmark Towards Trustworthy Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/586640cda3db2dc77349013dcefee456-Paper-Datasets_and_Benchmarks_Track.pdf) (as "OOD robustness")**
> The ability to maintain performance on unusual or shifted data domains that differ from training distribution.

**[Scaling Laws for Reward Model Overoptimization in Direct Alignment Algorithms](https://proceedings.neurips.cc/paper_files/paper/2024/file/e45caa3d5273d105b8d045e748636957-Paper-Conference.pdf) (as "OOD Robustness")**
> The degree to which model performance remains stable when queried on samples potentially out-of-distribution relative to the training data.

**[CARES: A Comprehensive Benchmark of Trustworthiness in Medical Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fde7f40f8ced5735006810534dc66b33-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Out-of-distribution robustness")**
> A specific facet of robustness concerning the model's ability to handle test data whose distributions significantly differ from the training data, including input-level and semantic-level shifts.

**[Just Enough Shifts: Mitigating Over-Refusal in Aligned Language Models with Targeted Representation Fine-Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dabas25a/dabas25a.pdf) (as "Distributional robustness")**
> The stability of a model's performance, particularly its safety and compliance behaviors, when the distribution of input queries changes.

## Relationships

### Out-of-distribution generalization →
- **RewardBench** (measurements) — *measured_by*
  > We employ the primary dataset from RewardBench to evaluate the out-of-domain generalization capabilities of our reward models. (Section 4.3)
  - [OpenPRM: Building Open-domain Process-based Reward Models with Preference Trees](https://proceedings.iclr.cc/paper_files/paper/2025/file/c919a2b5ec1de69f2629f9119676e336-Paper-Conference.pdf)
- **CNN/DailyMail** (measurements) — *measured_by*
  > To evaluate out-of-distribution (OOD) generalisation, we specify ... one or more out-of-distribution (OOD) test sets for each task... For summarisation, the ... OOD test set is the CNN/DailyMail test set (Section 5.1).
  - [Understanding the Effects of RLHF on LLM Generalisation and Diversity](https://proceedings.iclr.cc/paper_files/paper/2024/file/5a68d05006d5b05dd9463dd9c0219db0-Paper-Conference.pdf)
- **AlpacaEval** (measurements) — *measured_by*
  > To evaluate out-of-distribution (OOD) generalisation, we specify ... one or more out-of-distribution (OOD) test sets for each task... For instruction following, the ID test set is a new test set ... For the first OOD test sets, we use the AlpacaEval evaluation test set (Section 5.1).
  - [Understanding the Effects of RLHF on LLM Generalisation and Diversity](https://proceedings.iclr.cc/paper_files/paper/2024/file/5a68d05006d5b05dd9463dd9c0219db0-Paper-Conference.pdf)
- **AndroidControl** (measurements) — *measured_by*
  > ANDROIDCONTROL is the most diverse UI control dataset to date, including 14,548 unique tasks over 833 Android apps, thus allowing us to conduct in-depth analysis of the model performance in and out of the domain of the training data. (Abstract)
  - [On the Effects of Data Scale on UI Control Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/a79f3ef3b445fd4659f44648f7ea8ffd-Paper-Datasets_and_Benchmarks_Track.pdf)
- **SST-2** (measurements) — *measured_by*
  > "we test on the OOD SST-2 [128] from [147], paired with unrelated images and those generated with the text prompts (Task R.3)."
  - [MultiTrust: A Comprehensive Benchmark Towards Trustworthy Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/586640cda3db2dc77349013dcefee456-Paper-Datasets_and_Benchmarks_Track.pdf)
- **CoGS** (measurements) — *measured_by*
  > “For the COGS dataset (Kim and Linzen, 2020), we evaluate the model’s in-distribution and out-of-distribution generalization performance”
  - [Initialization is Critical to Whether Transformers Fit Composite Functions by Reasoning or Memorizing](https://proceedings.neurips.cc/paper_files/paper/2024/file/19c145aaad40927c51f4d10eaa339c20-Paper-Conference.pdf)
- **Blocksworld** (measurements) — *measured_by*
  > Since all the exemplar candidates are with 3-7 blocks, we denote test examples with 3-7 blocks as in-distribution (ID) and 8-20 blocks as out-of-distribution (OOD). (Figure 6)
  - [Improving Large Language Model Planning with Action Sequence Similarity](https://proceedings.iclr.cc/paper_files/paper/2025/file/b18c6549c77411d92e645027a25838a8-Paper-Conference.pdf)
- **SHP** (measurements) — *measured_by*
  > Beyond RewardBench, we also aim to test the out-of-distribution generalization ability of reward models including CrossEval (Zhong et al., 2024), QA Feedback (Wu et al., 2023) and SHP (Ethayarajh et al., 2022).
  - [Self-Generated Critiques Boost Reward Modeling for Language Models](https://aclanthology.org/2025.naacl-long.573.pdf)
- **IMDb** (measurements) — *measured_by*
  > To test this hypothesis [about generalizability], we conducted an experiment ... under conditions of domain shift. For this experiment, we used three text classification datasets. Specifically, we used IMDB, CR (Ding et al., 2008), and Tweet for sentiment classification. (Section 4.4)
  - [Plug-in and Fine-tuning: Bridging the Gap between Small Language Models and Large Language Models](https://aclanthology.org/2025.acl-long.271.pdf)
- **GSM8K** (measurements) — *measured_by*
  > To rigorously assess the generalization capabilities of merged checkpoints to unseen domains, we evaluated the out-of-domain (OOD) performance of various merging methods. Although merging weights were determined using the C-Eval dataset (in-domain, IND), we tested the merged models on three diverse OOD datasets: CMMLU, MMLU, and GSM8K. (Section 4.2)
  - [Maximizing Intermediate Checkpoint Value in LLM Pretraining with Bayesian Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25bv/liu25bv.pdf)
- **PIQA** (measurements) — *measured_by*
  > To assess generalization beyond the pretraining distribution, we evaluate models on a series of diverse reasoning tasks in a 5-shot setting, including LogiQA Liu et al. (2020), LogiQA 2 Liu et al. (2023), SciQ Welbl et al. (2017), and PiQA Bisk et al. (2020). (Section 6.1)
  - [Dynamic Loss-Based Sample Reweighting for Improved Large Language Model Pretraining](https://proceedings.iclr.cc/paper_files/paper/2025/file/ded26b348d55953a4863d41540b7d5c4-Paper-Conference.pdf)
- **SVAMP** (measurements) — *measured_by*
  > Additionally, we include two mathematical reasoning datasets, i.e., SVAMP [12] and ASDiv [18], to evaluate the out-of-domain generalizability of the models fine-tuned on the data generated from GSM8K and MATH datasets.
  - [Neuro-Symbolic Data Generation for Math Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/29d319f7c1513c9ecd81d3a6e9632a6e-Paper-Conference.pdf)
- **PopQA** (measurements) — *measured_by*
  > For out-of-domain evaluation, we introduce three datasets that differ significantly in question style and information distribution: MuSiQue (Trivedi et al., 2022), Bamboogle (Press et al., 2022), and PopQA (Mallen et al., 2022). These datasets test the model’s generalization ability beyond the training domain. (Section 4.2.1)
  - [DeepResearcher: Scaling Deep Research via Reinforcement Learning in Real-world Environments](https://aclanthology.org/2025.emnlp-main.22.pdf)
- **ARC-Challenge** (measurements) — *measured_by*
  > We fine-tune the LLMs on OBQA (as the ID dataset) and test them on ARC-C, ARC-E, and CSQA (as OOD dataset).
  - [Calibrating LLMs with Information-Theoretic Evidential Deep Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/0cbdd1e6613c42fe975337671790f406-Paper-Conference.pdf)
- **ARC-Easy** (measurements) — *measured_by*
  > We fine-tune the LLMs on OBQA (as the ID dataset) and test them on ARC-C, ARC-E, and CSQA (as OOD dataset).
  - [Calibrating LLMs with Information-Theoretic Evidential Deep Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/0cbdd1e6613c42fe975337671790f406-Paper-Conference.pdf)
- **SciQ** (measurements) — *measured_by*
  > To assess generalization beyond the pretraining distribution, we evaluate models on a series of diverse reasoning tasks in a 5-shot setting, including LogiQA Liu et al. (2020), LogiQA 2 Liu et al. (2023), SciQ Welbl et al. (2017), and PiQA Bisk et al. (2020). (Section 6.1)
  - [Dynamic Loss-Based Sample Reweighting for Improved Large Language Model Pretraining](https://proceedings.iclr.cc/paper_files/paper/2025/file/ded26b348d55953a4863d41540b7d5c4-Paper-Conference.pdf)
- **Reddit TL;DR** (measurements) — *measured_by*
  > To evaluate the generalization ability of the aligned models on out-of-distribution data, we fine-tune the models using only posts from the relationship and relationship advice subreddits of the Reddit TL;DR (Stiennon et al., 2020) dataset. (Section 6)
  - [Variational Best-of-N Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/402542c2341e5d2eadc1dd0891275901-Paper-Conference.pdf)
- **HANS** (measurements) — *measured_by*
  > We used OOD evaluation datasets for NLI and paraphrase identification... for NLI, we employed HANS (McCoy et al., 2019)... making them suitable benchmarks for evaluating the OOD robustness of ICL. (Section 4.1)
  - [Exploring Explanations Improves the Robustness of In-Context Learning](https://aclanthology.org/2025.acl-long.1155.pdf)
- **PAWS** (measurements) — *measured_by*
  > We used OOD evaluation datasets for NLI and paraphrase identification... for paraphrase identification, we used PAWS (Zhang et al., 1919)... making them suitable benchmarks for evaluating the OOD robustness of ICL. (Section 4.1)
  - [Exploring Explanations Improves the Robustness of In-Context Learning](https://aclanthology.org/2025.acl-long.1155.pdf)
- **SciBench** (measurements) — *measured_by*
  > Among these, AIME-2024, HumanEval, HumanEval+, GPQA, and SciBench are from a totally different distributions compared to training data, serving to verify the generalization capability of MAS-GPT. (Section 4.1)
  - [MAS-GPT: Training LLMs to Build LLM-based Multi-Agent Systems](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ye25g/ye25g.pdf)
- **ProofNet** (measurements) — *measured_by*
  > We also report the performance of the model trained only on LeanWorkbook for 24 iterations, excluding miniF2F-valid and proofnet-valid, demonstrating that the model trained with STP also generalizes to out-of-domain theorems. (Section 4.2)
  - [STP: Self-play LLM Theorem Provers with Iterative Conjecturing and Proving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dong25h/dong25h.pdf)
- **42D** (measurements) — *measured_by*
  > General-domain test sets: includes 42D and HardEN. These sets are designed to challenge models in diverse, unfamiliar, or out-of-distribution contexts. (Section 4.1)
  - [Towards General-Domain Word Sense Disambiguation: Distilling Large Language Model into Compact Disambiguator](https://aclanthology.org/2025.emnlp-main.45.pdf)
- **HardEN** (measurements) — *measured_by*
  > General-domain test sets: includes 42D and HardEN. These sets are designed to challenge models in diverse, unfamiliar, or out-of-distribution contexts. (Section 4.1)
  - [Towards General-Domain Word Sense Disambiguation: Distilling Large Language Model into Compact Disambiguator](https://aclanthology.org/2025.emnlp-main.45.pdf)
- **YAGS** (measurements) — *measured_by*
  > To assess generalization beyond the training distribution, we evaluated the FN 1.7 fine-tuned model (§3.2) on the two established out-of-domain datasets. YAGS (Hartmann et al., 2017) is a benchmark annotated with FN 1.5 frames... (Section 4.2)
  - [Do LLMs Encode Frame Semantics? Evidence from Frame Identification](https://aclanthology.org/2025.emnlp-main.1499.pdf)

### → Out-of-distribution generalization
- **In-context learning** (constructs) — *causes*
  > We argue that context is environment, and posit that in-context learning holds the key to better domain generalization. (Section 1)
  - [Context is Environment](https://proceedings.iclr.cc/paper_files/paper/2024/file/03645743ea35690f30d795d6bac149a5-Paper-Conference.pdf)
- **Compositionality** (constructs) — *causes*
  > Large language models can solve tasks that were not present in the training set. This capability is believed to be due to in-context learning and skill composition. (Abstract)
  - [Learning to grok: Emergence of in-context learning and skill composition in modular arithmetic tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/17d60fef592086d1a5cb136f1946df59-Paper-Conference.pdf)
- **Robustness** (constructs) — *causes*
  > The emergent abilities of LLMs, especially in OOD scenarios, largely depends on the robustness of their representations (Section 3.4)
  - [Tri-Level Navigator: LLM-Empowered Tri-Level Learning for Time Series OOD Generalization](https://proceedings.neurips.cc/paper_files/paper/2024/file/c78d9d035215039ab46e48c281e6a63d-Paper-Conference.pdf)
- **Action grounding** (behaviors tasks) — *causes*
  > omitting the pre-training stage significantly degrades performance... These results highlight the critical importance of the data infrastructure for grounding data synthesis; with this infrastructure in place, we can easily improve OOD downstream performance simply by scaling the pre-training corpus. (Section 5.3)
  - [OS-ATLAS: Foundation Action Model for Generalist GUI Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/0faa4bc5f522076947a030273629d4fe-Paper-Conference.pdf)
- **Shortcut learning** (constructs) — *causes*
  > ...the model can rely on these ‘shortcuts’ and fail to generalize to out-of-distribution data. (Section 3.1)
  - [Towards Operationalizing Right to Data Protection](https://aclanthology.org/2025.naacl-long.416.pdf)

### Associated with
- **Invariance** (constructs)
  > In the first category, domain generalization algorithms based on invariance (Muandet et al., 2013; Ganin et al., 2016; Peters et al., 2016; Arjovsky et al., 2019), illustrated in Figure 1a, regularize predictors h(xe i) to not contain any information about the environment e. (Section 2)
  - [Context is Environment](https://proceedings.iclr.cc/paper_files/paper/2024/file/03645743ea35690f30d795d6bac149a5-Paper-Conference.pdf)
- **Generation diversity** (constructs)
  > We demonstrate an inherent tradeoff between generalisation performance and output diversity when choosing between these methods (Section 7).
  - [Understanding the Effects of RLHF on LLM Generalisation and Diversity](https://proceedings.iclr.cc/paper_files/paper/2024/file/5a68d05006d5b05dd9463dd9c0219db0-Paper-Conference.pdf)
- **Memorization** (constructs)
  > In fact, the small two-layer model we study has such a low capacity that it entirely skips the in-distribution generalization phase and immediately jumps from pure memorization to out-of-distribution generalization. (Section 4.1)
  - [Learning to grok: Emergence of in-context learning and skill composition in modular arithmetic tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/17d60fef592086d1a5cb136f1946df59-Paper-Conference.pdf)
- **Reward overoptimization** (constructs)
  > “There are two prevailing explanations for why this phenomenon occurs. 1. OOD Robustness: In the classical RLHF pipeline, the RL objective (eq. (3)) is optimized using on-policy samples from πθ. This means that the reward function is continuously queried using unseen model samples which are potentially out-of-distribution.”
  - [Scaling Laws for Reward Model Overoptimization in Direct Alignment Algorithms](https://proceedings.neurips.cc/paper_files/paper/2024/file/e45caa3d5273d105b8d045e748636957-Paper-Conference.pdf)
