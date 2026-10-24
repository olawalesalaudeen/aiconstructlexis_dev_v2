# Multiple-choice question answering
**Type:** Behavior  
**Referenced in:** 317 papers  
**Also known as:** Multi-choice question answering, Multiple-choice answering, Single-choice question answering, Multiple-selection question answering, Multiple Choice Question, Answer selection, Multiple-choice classification, Multiple-choice reasoning, Multiple-choice examination, Fixed-choice question answering  

## State of the Field

**Space of definitions.** Across papers, the dominant framing is closed-ended answer selection: the model chooses the correct option from a fixed set, usually discrete choices such as A/B/C/D, for a question or question-context pair. Most work treats success as producing a single correct option letter, index, or answer string, and some papers operationalize this with constrained decoding to valid options or by selecting the highest-likelihood option. A smaller line of work broadens the task to Yes/No/Not Sure Enough labels, a fifth abstention option, or selecting all correct answers rather than exactly one.

**Variants.** Variants appear under several names, including multi-choice question answering, single-choice question answering, multiple-selection question answering, answer selection, and fixed-choice question answering. Papers study it in commonsense and science reasoning, academic exams, medical and clinical cases, financial and cultural questions, survey items, code and computational thinking, and multimodal settings over images, video, speech, or image-text STEM problems. Some formulations are passage- or story-based, some ask for the next suitable step or a spatial relation, and some pair the selected option with an explanation or supporting evidence.

**Space of elicitation and scores.** Papers link this behavior to 50 measurement instruments. The most common are MMLU, ARC-Challenge, CommonsenseQA, ARC, and HellaSwag, and the linked instruments are mostly benchmark datasets or benchmark suites, with a smaller amount of work using evaluation tooling or human evaluation. Scoring is usually reported as accuracy or exact match against the correct choice, often by taking the option with the highest likelihood, conditional log probability, or top-choice logit, though some papers instead require the model to emit the option letter or index directly.

**What it is taken as evidence of.** Papers link it to 8 constructs, but they do not converge on a single construct that it reflects. The most recurring link is Commonsense reasoning: some papers treat commonsense reasoning as measured by multiple-choice question answering, while others describe the two as related. Positional bias is also related to it, Calibration is measured by multiple-choice questions, Emergent abilities are related to it, and one paper claims a causal relationship from In-context learning to multiple-choice question answering, reporting better performance with more in-context examples.

## Sources

**[Are Human-generated Demonstrations Necessary for In-context Learning?](https://proceedings.iclr.cc/paper_files/paper/2024/file/19914b5bf19ab2b245d2e6ff7299e8f0-Paper-Conference.pdf)**
> The observable task of selecting the correct answer from a set of discrete options (e.g., A/B/C/D) in response to a given question.

**[Benchmarking Generative Models on Computational Thinking Tests in Elementary Visual Programming](https://proceedings.neurips.cc/paper_files/paper/2024/file/6d5e00006b65fcc55c3c1798da821663-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Multi-choice question answering")**
> The task of selecting the single correct option from a set of four choices in response to a question about a given grid, code, or programming concept.

**[IRCAN: Mitigating Knowledge Conflicts in LLM Generation via Identifying and Reweighting Context-Aware Neurons](https://proceedings.neurips.cc/paper_files/paper/2024/file/08a9e28c96d016dd63903ab51cd085b0-Paper-Conference.pdf) (as "Multiple-choice answering")**
> Selecting the correct option from a set of choices based on provided context and question.

**[Can Large Language Models Be Good Language Teachers?](https://aclanthology.org/2025.emnlp-main.1222.pdf) (as "Single-choice question answering")**
> The observable task of selecting the single correct option from a list of choices in response to a question, often within a structured format.

**[LoCt-Instruct: An Automatic Pipeline for Constructing Datasets of Logical Continuous Instructions](https://aclanthology.org/2025.emnlp-main.1734.pdf) (as "Multiple-selection question answering")**
> Selecting all correct responses from a set of options for each sub-question in a multi-step instruction chain, where distractors increase complexity and test robustness.

**[CodeSync: Synchronizing Large Language Models with Dynamic Code Evolution at Scale](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25t/wang25t.pdf) (as "Multiple Choice Question")**
> A benchmark task in which the model selects the correct API invocation from four candidate invocations with one correct option and three distractors.

**[When LLMs Meet Cunning Texts: A Fallacy Understanding Benchmark for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/cbfbf1a9adbcc29783475d2767f218e8-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Answer selection")**
> The task of choosing the single correct explanation from a set of four provided candidate options in response to a given cunning text.

**[Calibrating LLMs with Information-Theoretic Evidential Deep Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/0cbdd1e6613c42fe975337671790f406-Paper-Conference.pdf) (as "Multiple-choice classification")**
> The observable task of selecting the correct token or option from a set of candidates (e.g., A/B/C/D) given an input sequence.

**[Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection](https://proceedings.iclr.cc/paper_files/paper/2024/file/25f7be9694d7b32d5cc670927b8091e1-Paper-Conference.pdf) (as "Multiple-choice reasoning")**
> The task of selecting the correct answer from a set of options for questions that require reasoning, often in a scientific or academic context.

**[Scalable Language Model with Generalized Continual Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/79fe2c290c0566f88617e9c5bd593441-Paper-Conference.pdf) (as "Multiple-choice examination")**
> Selecting the correct answer from a set of options in a structured exam format across diverse domains.

**[Be Confident: Uncovering Overfitting in MLLM Multi-Task Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25r/huang25r.pdf) (as "Fixed-choice question answering")**
> Selecting the correct answer from a given set of options in response to a question about a visual input.

## Relationships

### Multiple-choice question answering →
- **MMLU** (measurements) — *measured_by*
  > In the multiple-choice based datasets (ARC, RACE, HHH, MMLU), we consider the following approaches: (Section 3)
  - [The Consensus Game: Language Model Generation via Equilibrium Search](https://proceedings.iclr.cc/paper_files/paper/2024/file/17a9bfda8be2301e24f232fb32f1e0fa-Paper-Conference.pdf)
- **ARC-Challenge** (measurements) — *measured_by*
  > We conduct experiments on MMLU (Hendrycks et al., 2020), ARC-Challenge (Clark et al., 2018), and CommonsenseQA (CSQA) (Talmor et al., 2019), which are all MCQ benchmarks widely used for LLM evaluation.
  - [Large Language Models Are Not Robust Multiple Choice Selectors](https://proceedings.iclr.cc/paper_files/paper/2024/file/54dd9e0cff6d9214e20d97eb2a3bae49-Paper-Conference.pdf)
- **CommonsenseQA** (measurements) — *measured_by*
  > We conduct experiments on MMLU (Hendrycks et al., 2020), ARC-Challenge (Clark et al., 2018), and CommonsenseQA (CSQA) (Talmor et al., 2019), which are all MCQ benchmarks widely used for LLM evaluation.
  - [Large Language Models Are Not Robust Multiple Choice Selectors](https://proceedings.iclr.cc/paper_files/paper/2024/file/54dd9e0cff6d9214e20d97eb2a3bae49-Paper-Conference.pdf)
- **ARC** (measurements) — *measured_by*
  > For MCQ answering, we use AI2 Reasoning Challenge (Clark et al., 2018, ARC), Massive Multitask Language Understanding (Hendrycks et al., 2021, MMLU), and Reward Bench Reasoning (Lambert et al., 2024, RWDB-R). (Section 4)
  - [Task-Adaptive Pretrained Language Models via Clustered-Importance Sampling](https://proceedings.iclr.cc/paper_files/paper/2025/file/688006b3d1df8be5bb2a2a31a407180c-Paper-Conference.pdf)
- **HellaSwag** (measurements) — *measured_by*
  > We experiment on two challenging real-world multiple-choice datasets from LLM benchmarks: HellaSwag (Zellers et al., 2019) and MMLU (Hendrycks et al., 2021). (Section 3.2).
  - [Answer, Assemble, Ace: Understanding How LMs Answer Multiple Choice Questions](https://proceedings.iclr.cc/paper_files/paper/2025/file/c248154176c08147e82c0b30961604f7-Paper-Conference.pdf)
- **MMLU-Pro** (measurements) — *measured_by*
  > “The MMLU-Pro dataset, while enhancing the complexity of MMLU by incorporating more challenging, reasoning-focused questions, remains constrained by the limitations of the multiple-choice format.”
  - [MMLU-Pro: A More Robust and Challenging Multi-Task Language Understanding Benchmark](https://proceedings.neurips.cc/paper_files/paper/2024/file/ad236edc564f3e3156e1b2feafb99a24-Paper-Datasets_and_Benchmarks_Track.pdf)
- **TruthfulQA** (measurements) — *measured_by*
  > For multiple-choice question tasks, we use the TruthfulQA [29] and FACTOR (Wiki) [33] datasets to assess the LLMs’ factuality (Section 3.1)
  - [SLED: Self Logits Evolution Decoding for Improving Factuality in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/0939f13ffce3ff487509d902ddba4571-Paper-Conference.pdf)
- **OpenBookQA** (measurements) — *measured_by*
  > “The multiple-choice tasks include: ... open book question answering (OpenBookQA; Mihaylov et al. 2018)”
  - [Scaling Stick-Breaking Attention: An Efficient Implementation and In-depth Study](https://proceedings.iclr.cc/paper_files/paper/2025/file/0b9a261b9aca858b7e6ee44d8b2055be-Paper-Conference.pdf)
- **ARC-Easy** (measurements) — *measured_by*
  > "We also re-examined data collected during the Pythia training runs [5] on the SciQ [73], PIQA [8], WinoGrande [60], and ARC Easy [18] datasets. Each of these consist of a wide range of questions with multiple-choice answers"
  - [LLM Circuit Analyses Are Consistent Across Training and Scale](https://proceedings.neurips.cc/paper_files/paper/2024/file/47c7edadfee365b394b2a3bd416048da-Paper-Conference.pdf)
- **BIG-Bench Hard** (measurements) — *measured_by*
  > World Knowledge: MMLU [28] (5-shot), BBH [29] (3-shot), with the assessment based on the accuracy of multiple-choice answers. (Section 3.1).
  - [Should We Really Edit Language Models? On the Evaluation of Edited Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/370fa2e691f57eb319bc263a07dad4a5-Paper-Conference.pdf)
- **SciQ** (measurements) — *measured_by*
  > The Science Questions (SciQ) dataset [73] consists of 13,679 crowdsourced multiple choice science exam questions ranging across physics, chemistry, biology, earth science, astronomy, and computer science. (Appendix E)
  - [LLM Circuit Analyses Are Consistent Across Training and Scale](https://proceedings.neurips.cc/paper_files/paper/2024/file/47c7edadfee365b394b2a3bd416048da-Paper-Conference.pdf)
- **InfiniteBench** (measurements) — *measured_by*
  > We evaluate all models on three tasks in this benchmark: summarization (En.Sum), long-book question answering (En.QA), and multi-choice question-answering (En.MC).
  - [LongPO: Long Context Self-Evolution of Large Language Models through Short-to-Long Preference Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/1332893b662f655660c9abdf793230cf-Paper-Conference.pdf)
- **WinoGrande** (measurements) — *measured_by*
  > "We also re-examined data collected during the Pythia training runs [5] on the SciQ [73], PIQA [8], WinoGrande [60], and ARC Easy [18] datasets. Each of these consist of a wide range of questions with multiple-choice answers"
  - [LLM Circuit Analyses Are Consistent Across Training and Scale](https://proceedings.neurips.cc/paper_files/paper/2024/file/47c7edadfee365b394b2a3bd416048da-Paper-Conference.pdf)
- **lm-evaluation-harness** (measurements) — *measured_by*
  > We evaluate the pretrained models on language model tasks and multiple-choice tasks from LM evaluation Harness (Gao et al., 2023). (Section 5.3)
  - [Scaling Stick-Breaking Attention: An Efficient Implementation and In-depth Study](https://proceedings.iclr.cc/paper_files/paper/2025/file/0b9a261b9aca858b7e6ee44d8b2055be-Paper-Conference.pdf)
- **MedQA** (measurements) — *measured_by*
  > We also use MedQA, a collection of multiple-choice questions from the professional medical board exams (Jin et al., 2020).
  - [Teaching LLMs How to Learn with Contextual Fine-Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/fb0494e5ce9351cb120c3a35328dffef-Paper-Conference.pdf)
- **QuALITY** (measurements) — *measured_by*
  > Closed-ended tasks primarily focus on the capacity for understanding and reasoning within long contexts, including tasks like multiple-choice questions from QuALITY [5]... (Section 4.2).
  - [Mixture of In-Context Experts Enhance LLMs' Long Context Awareness](https://proceedings.neurips.cc/paper_files/paper/2024/file/91315fbb83ce353ae5538cba395f70d1-Paper-Conference.pdf)
- **PIQA** (measurements) — *measured_by*
  > The Physical Interaction Question Answering (PIQA) dataset [8] contains a total of 21k (across different subsets) multiple choice questions probing reasoning about basic physical commonsense knowledge. (Appendix E)
  - [LLM Circuit Analyses Are Consistent Across Training and Scale](https://proceedings.neurips.cc/paper_files/paper/2024/file/47c7edadfee365b394b2a3bd416048da-Paper-Conference.pdf)
- **BoolQ** (measurements) — *measured_by*
  > For the multiple-choice tasks, we use datasets: COPA (Gordon et al., 2012), StoryCloze (Mostafazadeh et al., 2016), NLI (Bowman et al., 2015), MMLU (Hendrycks et al., 2021), SST2 (Socher et al., 2013), SST5 (Socher et al., 2013), BoolQ (Clark et al., 2019), and Winogrande (Sakaguchi et al., 2020)... (Section 4.1)
  - [Semantics-Adaptive Activation Intervention for LLMs via Dynamic Steering Vectors](https://proceedings.iclr.cc/paper_files/paper/2025/file/c4d26a95fd83f8e590f81c54ae670b5d-Paper-Conference.pdf)
- **MedMCQA** (measurements) — *measured_by*
  > Experiment results on the multiple-choice questions benchmarks in six languages range from different data ratios... MedMCQA
  - [Knowledge Graph Finetuning Enhances Knowledge Manipulation in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/e44337573fcac83f219c8effa4ebf90d-Paper-Conference.pdf)
- **GPQA** (measurements) — *measured_by*
  > To assess the impact of DRAG on retrieval-augmented multiple-choice question answering (MCQA), we conduct extensive experiments across four benchmark datasets: ARC-C, MedMCQA, GPQA, and MMLU
  - [DRAG: Distilling RAG for SLMs from LLMs to Transfer Knowledge and Mitigate Hallucination via Evidence and Graph-based Distillation](https://aclanthology.org/2025.acl-long.358.pdf)
- **WMDP** (measurements) — *measured_by*
  > We use the multiple-choice question-answering Weapons of Mass Destruction Proxy (WMDP) and Massive Multitask Language Understanding (MMLU) benchmarks. (Section 3.1. Benchmarks).
  - [The Elicitation Game: Evaluating Capability Elicitation Techniques](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hofstatter25a/hofstatter25a.pdf)
- **Belebele** (measurements) — *measured_by*
  > For multiple choice QA, we use Belebele (Bandarkar et al., 2024) and Multilingual MMLU (Hendrycks et al., 2021; Lai et al., 2023, MMMLU) with five shot prompting. (Section 5.4)
  - [Adapters for Altering LLM Vocabularies: What Languages Benefit the Most?](https://proceedings.iclr.cc/paper_files/paper/2025/file/ab5492f57995409351cbf1a1cdf5f1a4-Paper-Conference.pdf)
- **EHRNoteQA** (measurements) — *measured_by*
  > We offer EHRNoteQA in two formats: open-ended and multi-choice question answering, and propose a reliable evaluation method for each. (Abstract)
  - [EHRNoteQA: An LLM Benchmark for Real-World Clinical Practice Using Discharge Summaries](https://proceedings.neurips.cc/paper_files/paper/2024/file/e15c4afff22f12c4986c1fcb4e941e03-Paper-Datasets_and_Benchmarks_Track.pdf)
- **SEED-Bench** (measurements) — *measured_by*
  > “SEED-Bench [36] consists of 19k multiple choice questions with human annotations”
  - [Mitigating Object Hallucination via Concentric Causal Attention](https://proceedings.neurips.cc/paper_files/paper/2024/file/a76ed4a8ef522c823d73925e7fff16d4-Paper-Conference.pdf)
- **MMBench** (measurements) — *measured_by*
  > “we further evaluate our trained model over six benchmarks that examines LVLMs general perception capability, including SEED-Bench [36], ScienceQA [49], GQA [28], Vizwiz [22], MMBench [48] and MMStar [8] which evaluates LVLMs perception capability with multiple choice questions.”
  - [Mitigating Object Hallucination via Concentric Causal Attention](https://proceedings.neurips.cc/paper_files/paper/2024/file/a76ed4a8ef522c823d73925e7fff16d4-Paper-Conference.pdf)
- **CVQA** (measurements) — *measured_by*
  > “Each question was accompanied by one correct answer and three distractors that were reasonably plausible, yet incorrect, thus forming a multiple-choice format.”
  - [CVQA: Culturally-diverse Multilingual Visual Question Answering Benchmark](https://proceedings.neurips.cc/paper_files/paper/2024/file/1568882ba1a50316e87852542523739c-Paper-Datasets_and_Benchmarks_Track.pdf)
- **COPA** (measurements) — *measured_by*
  > For the multiple-choice tasks, we use datasets: COPA (Gordon et al., 2012), StoryCloze (Mostafazadeh et al., 2016), NLI (Bowman et al., 2015), MMLU (Hendrycks et al., 2021), SST2 (Socher et al., 2013), SST5 (Socher et al., 2013), BoolQ (Clark et al., 2019), and Winogrande (Sakaguchi et al., 2020)... (Section 4.1)
  - [Semantics-Adaptive Activation Intervention for LLMs via Dynamic Steering Vectors](https://proceedings.iclr.cc/paper_files/paper/2025/file/c4d26a95fd83f8e590f81c54ae670b5d-Paper-Conference.pdf)
- **StoryCloze** (measurements) — *measured_by*
  > For the multiple-choice tasks, we use datasets: COPA (Gordon et al., 2012), StoryCloze (Mostafazadeh et al., 2016), NLI (Bowman et al., 2015), MMLU (Hendrycks et al., 2021), SST2 (Socher et al., 2013), SST5 (Socher et al., 2013), BoolQ (Clark et al., 2019), and Winogrande (Sakaguchi et al., 2020)... (Section 4.1)
  - [Semantics-Adaptive Activation Intervention for LLMs via Dynamic Steering Vectors](https://proceedings.iclr.cc/paper_files/paper/2025/file/c4d26a95fd83f8e590f81c54ae670b5d-Paper-Conference.pdf)
- **SST-2** (measurements) — *measured_by*
  > For the multiple-choice tasks, we use datasets: COPA (Gordon et al., 2012), StoryCloze (Mostafazadeh et al., 2016), NLI (Bowman et al., 2015), MMLU (Hendrycks et al., 2021), SST2 (Socher et al., 2013), SST5 (Socher et al., 2013), BoolQ (Clark et al., 2019), and Winogrande (Sakaguchi et al., 2020)... (Section 4.1)
  - [Semantics-Adaptive Activation Intervention for LLMs via Dynamic Steering Vectors](https://proceedings.iclr.cc/paper_files/paper/2025/file/c4d26a95fd83f8e590f81c54ae670b5d-Paper-Conference.pdf)
- **SST-5** (measurements) — *measured_by*
  > For the multiple-choice tasks, we use datasets: COPA (Gordon et al., 2012), StoryCloze (Mostafazadeh et al., 2016), NLI (Bowman et al., 2015), MMLU (Hendrycks et al., 2021), SST2 (Socher et al., 2013), SST5 (Socher et al., 2013), BoolQ (Clark et al., 2019), and Winogrande (Sakaguchi et al., 2020)... (Section 4.1)
  - [Semantics-Adaptive Activation Intervention for LLMs via Dynamic Steering Vectors](https://proceedings.iclr.cc/paper_files/paper/2025/file/c4d26a95fd83f8e590f81c54ae670b5d-Paper-Conference.pdf)
- **INCLUDE** (measurements) — *measured_by*
  > INCLUDE is a dataset of 197,243 MCQA pairs from 1,926 examinations across 44 languages and 15 scripts.
  - [INCLUDE: Evaluating Multilingual Language Understanding with Regional Knowledge](https://proceedings.iclr.cc/paper_files/paper/2025/file/ced46a50befedcb884ccf0cbe8c3ad23-Paper-Conference.pdf)
- **MMMLU** (measurements) — *measured_by*
  > For multiple choice QA, we use Belebele (Bandarkar et al., 2024) and Multilingual MMLU (Hendrycks et al., 2021; Lai et al., 2023, MMMLU) with five shot prompting. (Section 5.4)
  - [Adapters for Altering LLM Vocabularies: What Languages Benefit the Most?](https://proceedings.iclr.cc/paper_files/paper/2025/file/ab5492f57995409351cbf1a1cdf5f1a4-Paper-Conference.pdf)
- **MME-RealWorld** (measurements) — *measured_by*
  > For each question, we manually construct four options, with one being the correct answer... We try to use the model's default prompt for multiple-choice questions...
  - [MME-RealWorld: Could Your Multimodal LLM Challenge High-Resolution Real-World Scenarios that are Difficult for Humans?](https://proceedings.iclr.cc/paper_files/paper/2025/file/df29d63af05cb91d705cf06ba5945b9d-Paper-Conference.pdf)
- **RACE** (measurements) — *measured_by*
  > “The multiple-choice tasks include: ... reading comprehension (RACE; Lai et al. 2017)”
  - [Scaling Stick-Breaking Attention: An Efficient Implementation and In-depth Study](https://proceedings.iclr.cc/paper_files/paper/2025/file/0b9a261b9aca858b7e6ee44d8b2055be-Paper-Conference.pdf)
- **JAMA Clinical Challenge** (measurements) — *measured_by*
  > Both datasets are structured as multiple-choice question-answering tasks, accompanied by expert-written explanations. (Abstract)
  - [Benchmarking Large Language Models on Answering and Explaining Challenging Medical Questions](https://aclanthology.org/2025.naacl-long.182.pdf)
- **Medbullets** (measurements) — *measured_by*
  > Both datasets are structured as multiple-choice question-answering tasks, accompanied by expert-written explanations. (Abstract)
  - [Benchmarking Large Language Models on Answering and Explaining Challenging Medical Questions](https://aclanthology.org/2025.naacl-long.182.pdf)
- **LogiQA 2.0** (measurements) — *measured_by*
  > LogiQA2 (Liu et al., 2023) for logical reasoning multi-choice QA;
  - [Warmup Generations: A Task-Agnostic Approach for Guiding Sequence-to-Sequence Learning with Unsupervised Initial State Generation](https://aclanthology.org/2025.acl-long.434.pdf)
- **OLMES** (measurements) — *measured_by*
  > We use the OLMES suite of 10 multiple choice question answering benchmarks (Gu et al., 2024)... (Section 2.4)
  - [DataDecide: How to Predict Best Pretraining Data with Small Experiments](https://raw.githubusercontent.com/mlresearch/v267/main/assets/magnusson25a/magnusson25a.pdf)
- **Open LLM Leaderboard** (measurements) — *measured_by*
  > We started from two LLM leaderboards: (1) HuggingFace’s Open LLM Leaderboard 21; and (2) Stanford’s Holistic Evaluation of Language Models (Helm) (Liang et al., 2023). Both use questions from the Massive Multitask Language Understanding (MMLU) question-answering dataset (Hendrycks et al., 2020), with multiple choice questions and labeled correct answers. (Section 3.1).
  - [Correlated Errors in Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/kim25e/kim25e.pdf)
- **HELM** (measurements) — *measured_by*
  > We started from two LLM leaderboards: (1) HuggingFace’s Open LLM Leaderboard 21; and (2) Stanford’s Holistic Evaluation of Language Models (Helm) (Liang et al., 2023). Both use questions from the Massive Multitask Language Understanding (MMLU) question-answering dataset (Hendrycks et al., 2020), with multiple choice questions and labeled correct answers. (Section 3.1).
  - [Correlated Errors in Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/kim25e/kim25e.pdf)
- **C-Eval** (measurements) — *measured_by*
  > For multi-choice QA, we choose eight subjects from CEVAL (Huang et al., 2023), covering compulsory courses from middle school to university in China. (Section 4.2)
  - [AQuilt: Weaving Logic and Self-Inspection into Low-Cost, High-Relevance Data Synthesis for Specialist LLMs](https://aclanthology.org/2025.emnlp-main.293.pdf)
- **MMMU** (measurements) — *measured_by*
  > “For both multiple-choice answers in MMMU and open responses in VL-ICL”
  - [Cache-of-Thought: Master-Apprentice Framework for Cost-Effective Vision Language Model Reasoning](https://aclanthology.org/2025.emnlp-main.97.pdf)
- **SinhalaMMLU** (measurements) — *measured_by*
  > To address this, we introduce SinhalaMMLU, the first multiple-choice question answering benchmark designed specifically for Sinhala, a low-resource language. (Abstract)
  - [SinhalaMMLU: A Comprehensive Benchmark for Evaluating Multitask Language Understanding in Sinhala](https://aclanthology.org/2025.emnlp-main.1673.pdf)
- **NOVA-63** (measurements) — *measured_by*
  > “a general multiple-choice benchmark containing 89,107 native questions across 14 languages and 63 academic secondary disciplines”
  - [NOVA-63: Native Omni-lingual Versatile Assessments of 63 Disciplines](https://aclanthology.org/2025.emnlp-main.364.pdf)
- **EDUADAPT** (measurements) — *measured_by*
  > To bridge this gap, we developed EDUADAPT, a benchmark of nearly 48k QA pairs (comprising both multiple-choice and open-ended question-answers) for Grades 1-12 across nine educational subjects, following the K-12 framework. (Section 1)
  - [EduAdapt: A Question Answer Benchmark Dataset for Evaluating Grade-Level Adaptability in LLMs](https://aclanthology.org/2025.emnlp-main.1736.pdf)
- **SNLI** (measurements) — *measured_by*
  > For the multiple-choice tasks, we use datasets: COPA (Gordon et al., 2012), StoryCloze (Mostafazadeh et al., 2016), NLI (Bowman et al., 2015), MMLU (Hendrycks et al., 2021), SST2 (Socher et al., 2013), SST5 (Socher et al., 2013), BoolQ (Clark et al., 2019), and Winogrande (Sakaguchi et al., 2020)... (Section 4.1)
  - [Semantics-Adaptive Activation Intervention for LLMs via Dynamic Steering Vectors](https://proceedings.iclr.cc/paper_files/paper/2025/file/c4d26a95fd83f8e590f81c54ae670b5d-Paper-Conference.pdf)

### → Multiple-choice question answering
- **Explanation generation** (behaviors tasks) — *correlates*
  > models that exhibit superior performance in the Answer Selection task tend to generate more plausible explanations. (Section 3.2)
  - [When LLMs Meet Cunning Texts: A Fallacy Understanding Benchmark for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/cbfbf1a9adbcc29783475d2767f218e8-Paper-Datasets_and_Benchmarks_Track.pdf)

### Associated with
- **Commonsense reasoning** (constructs)
  > we used the PEFT library (Mangrulkar et al., 2022) for fine-tuning LlaMA2-7B on common-sense reasoning tasks (multiple choice or True/False classification). (Section 5)
  - [Bayesian Low-rank Adaptation for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/07c256a163a7559186ec1c71e95b9ec9-Paper-Conference.pdf)
- **Positional bias** (constructs)
  > Pezeshkpour et al., 2023 identify inherent ‘positional bias’ in the MCQ setting, where LLMs prefer to select options in specific positions as answers (Section 2)
  - [Order-Independence Without Fine Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/85529bc995777a74072ef63c05bedd30-Paper-Conference.pdf)
- **Reasoning** (constructs)
  > The multiple-choice benchmarks we chose is challenging enough in itself and requires strong reasoning ability from the model; (Section 4.1)
  - [Reference Trustable Decoding: A Training-Free Augmentation Paradigm for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/925869234d3aa2a3aad5f05b643974aa-Paper-Conference.pdf)
- **Emergent abilities** (constructs)
  > Schaeffer et al. (2024a) finds that emergent abilities mainly happen on string-match and multiple-choice tasks (Schaeffer et al., 2024a), for which traditional performance measures exhibit strong discontinuity. (Sec. 1)
  - [U-shaped and Inverted-U Scaling behind Emergent Abilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f696200311b445af686c3ebd87ade1d7-Paper-Conference.pdf)
- **Action selection** (behaviors tasks)
  > Large language models (LLMs) (Touvron et al., 2023; Databricks, 2024; Abdin et al., 2024) have demonstrated remarkable capabilities in various decision-making tasks, including multi-choice question answering and tool usage (Section 1)
  - [Prune ’n Predict: Optimizing LLM Decision-making with Conformal Prediction](https://raw.githubusercontent.com/mlresearch/v267/main/assets/vishwakarma25b/vishwakarma25b.pdf)
- **Medical knowledge** (constructs)
  > For Low-Level tasks (f1), we adopt multiple-choice questions (MCQs) as simple knowledge recalling tasks for Low-Level, where the model is required to recognize the correct answer from multiple candidate options (see the left part of Figure 2). (Section 3.3)
  - [Evaluating LLMs Across Multi-Cognitive Levels: From Medical Knowledge Mastery to Scenario-Based Problem Solving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhou25n/zhou25n.pdf)
- **Selection bias** (constructs)
  > One such underexplored phenomenon is selection bias in MCQA. Unlike open-ended VQA formats, MCQA requires models to select one option among predefined choices (e.g., A/B/C/D), introducing the possibility of preference for certain option positions or tokens. (Introduction)
  - [Benchmarking and Mitigating MCQA Selection Bias of Large Vision-Language Models](https://aclanthology.org/2025.emnlp-main.1703.pdf)
- **Fine-grained visual recognition** (behaviors tasks)
  > we leverage the test sets as resources for annotated data and frame FGVR as a multiple-choice task
  - [Analyzing and Boosting the Power of Fine-Grained Visual Recognition for Multi-modal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/dfa2f1555d46b553827af4e1557f3c9a-Paper-Conference.pdf)
- **Calibration** (constructs)
  > The calibration error of an LLM is typically evaluated on a multiple-choice question and its corresponding correct answer, which can be formalized as an input-label pair (x, y)... (Section 3)
  - [Restoring Calibration for Aligned Large Language Models: A Calibration-Aware Fine-Tuning Approach](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xiao25b/xiao25b.pdf)
