# Open-ended question answering
**Type:** Behavior  
**Referenced in:** 38 papers  
**Also known as:** Open-ended answer generation, Free-form question answering, Free-text response generation, Free-form generation, Free-text question answering, Generative question answering  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is an unconstrained answer-generation task: models produce free-form natural language responses rather than choosing from predefined options, multiple-choice answers, or extracted spans. Most descriptions also expect detailed, comprehensive, or human-like answers, often for broad, complex, or non-factoid questions that may lack a single definitive answer and can allow multiple valid perspectives. Some papers further specify declarative-form answers or evaluate semantic correctness against reference answers, and one multimodal formulation requires both answers and explanations from a question plus video.

**Variants.** Variants in the literature include long-form non-factoid answering for complex questions, long-context question answering over long passages, and multimodal versions grounded in images, multi-image dialogue, medical images, or video. Papers also use nearby names such as open-ended answer generation, free-form question answering, and free-form generation, alongside other free-text or generative QA labels. Other settings include knowledge-graph question answering with explicit reasoning paths and supporting facts, culturally grounded multilingual or Arabic prompts, and domain-focused clinical or narrative questions. One paper also relates it to visual question answering.

**Space of elicitation and scores.** Papers link it to 15 measurement instruments. The most frequently linked are Natural Questions, TriviaQA, AlpacaEval, AmbigNQ, and CVQA, with 10 other instruments also appearing. These are mostly benchmark datasets or evaluation suites for open-ended QA and free-form generation, and papers score outputs with methods such as exact match accuracy, semantic correctness against reference answers after text processing, L.C. WinRate, or LLM-as-a-judge evaluation.

**What it is taken as evidence of.** Papers link it to 2 constructs rather than only one. One line treats knowledge application as measured by open-ended question answering in real-world scenarios, while another paper records a measured_by link to Truthfulness and describes free-form question answering as concentrating on truthfulness related to open-ended general factual knowledge. The linked construct claims therefore span more than one interpretation rather than a single shared one.

## Sources

**[ChatEval: Towards Better LLM-based Evaluators through Multi-Agent Debate](https://proceedings.iclr.cc/paper_files/paper/2024/file/25cc3adf8c85f7c70989cb8a97a691a7-Paper-Conference.pdf)**
> The task of providing comprehensive, detailed, and human-like responses to questions that do not have a predefined or fixed set of possible answers.

**[CausalChaos! Dataset for Comprehensive Causal Action Question Answering Over Longer Causal Chains Grounded in Dynamic Visual Scenes](https://proceedings.neurips.cc/paper_files/paper/2024/file/a89558069b44ae56ee0daf1f32aae1f6-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Open-ended answer generation")**
> The task of generating a free-form natural language answer to a question based on a video, without being provided a set of options.

**[Semantic Density: Uncertainty Quantification for Large Language Models through Confidence Measurement in Semantic Space](https://proceedings.neurips.cc/paper_files/paper/2024/file/f26d4fbaf7dfa115f1d4b3f104e26bce-Paper-Conference.pdf) (as "Free-form question answering")**
> Generating answers to questions without restricted formats or multiple-choice constraints.

**[Great Models Think Alike and this Undermines AI Oversight](https://raw.githubusercontent.com/mlresearch/v267/main/assets/goel25b/goel25b.pdf) (as "Free-text response generation")**
> Generating open-ended textual answers to questions without predefined options, used in LLM-as-a-judge evaluations.

**[Protecting Privacy in Multimodal Large Language Models with MLLMU-Bench](https://aclanthology.org/2025.naacl-long.207.pdf) (as "Free-form generation")**
> Generating an open-ended, natural language answer to a question based on provided context or internal knowledge.

**[RAPTOR: Recursive Abstractive Processing for Tree-Organized Retrieval](https://proceedings.iclr.cc/paper_files/paper/2024/file/8a2acd174940dbca361a6398a4f9df91-Paper-Conference.pdf) (as "Free-text question answering")**
> A specific form of question answering where the model must generate an open-ended, natural language response.

**[Towards Green AI in Fine-tuning Large Language Models via Adaptive Backpropagation](https://proceedings.iclr.cc/paper_files/paper/2024/file/b054fadf1ccd80b37d465f6082629934-Paper-Conference.pdf) (as "Generative question answering")**
> The task of generating a free-form text answer to a question, rather than extracting an answer span from a provided context.

## Relationships

### Open-ended question answering →
- **Natural Questions** (measurements) — *measured_by*
  > Specifically, we consider the open-ended QA task, where the model is prompted to generate the answer in a declarative form given a question. To validate our method and its theoretical guarantee on controlling FDR-E, we create a dataset on textual entailment using the Natural Questions (NQ) dataset [17] for each GLM. (Section A.3.2).
  - [Selective Generation for Controllable Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/5a6815122f533193a022cbc41786c1cc-Paper-Conference.pdf)
- **TriviaQA** (measurements) — *measured_by*
  > We cover four open-ended quenstion-answering datasets: TriviaQA (Joshi et al., 2017), Sciq (Welbl et al., 2017), WikiQA (Yang et al., 2015), and NQ (Kwiatkowski et al., 2019). (Section 4.1)
  - [Influences on LLM Calibration: A Study of Response Agreement, Loss Functions, and Prompt Styles](https://aclanthology.org/2025.acl-long.188.pdf)
- **FairEval** (measurements) — *measured_by*
  > We evaluate ChatEval on two benchmarks, FairEval and Topical-Chat which represent the categories of open-ended question answer and dialogue response generation, respectively. (Section 3)
  - [ChatEval: Towards Better LLM-based Evaluators through Multi-Agent Debate](https://proceedings.iclr.cc/paper_files/paper/2024/file/25cc3adf8c85f7c70989cb8a97a691a7-Paper-Conference.pdf)
- **EHRNoteQA** (measurements) — *measured_by*
  > We offer EHRNoteQA in two formats: open-ended and multi-choice question answering, and propose a reliable evaluation method for each. (Abstract)
  - [EHRNoteQA: An LLM Benchmark for Real-World Clinical Practice Using Discharge Summaries](https://proceedings.neurips.cc/paper_files/paper/2024/file/e15c4afff22f12c4986c1fcb4e941e03-Paper-Datasets_and_Benchmarks_Track.pdf)
- **CVQA** (measurements) — *measured_by*
  > “we made sure that CVQA is also convertible into free-text open-ended QA”
  - [CVQA: Culturally-diverse Multilingual Visual Question Answering Benchmark](https://proceedings.neurips.cc/paper_files/paper/2024/file/1568882ba1a50316e87852542523739c-Paper-Datasets_and_Benchmarks_Track.pdf)
- **GSM8K** (measurements) — *measured_by*
  > On the free-form generation tasks (GSM8K, TriviaQA and NQ), we calculate the exact match (EM) accuracy.
  - [Ensemble Learning for Heterogeneous Large Language Models with Deep Parallel Collaboration](https://proceedings.neurips.cc/paper_files/paper/2024/file/d8a6eb79f8ccaacbe7198a5caf3a0323-Paper-Conference.pdf)
- **MT-Bench** (measurements) — *measured_by*
  > We also tested open-ended question answering on MT-Bench (Chiang et al., 2023), a special case where Static scheduler is infeasible due to the absence of a validation set. (Section 5)
  - [Progressive Mixed-Precision Decoding for Efficient LLM Inference](https://proceedings.iclr.cc/paper_files/paper/2025/file/5df4313ecd4875931fbdacc486cc1fcf-Paper-Conference.pdf)
- **SciQ** (measurements) — *measured_by*
  > We cover four open-ended quenstion-answering datasets: TriviaQA (Joshi et al., 2017), Sciq (Welbl et al., 2017), WikiQA (Yang et al., 2015), and NQ (Kwiatkowski et al., 2019). (Section 4.1)
  - [Influences on LLM Calibration: A Study of Response Agreement, Loss Functions, and Prompt Styles](https://aclanthology.org/2025.acl-long.188.pdf)
- **WikiQA** (measurements) — *measured_by*
  > We cover four open-ended quenstion-answering datasets: TriviaQA (Joshi et al., 2017), Sciq (Welbl et al., 2017), WikiQA (Yang et al., 2015), and NQ (Kwiatkowski et al., 2019). (Section 4.1)
  - [Influences on LLM Calibration: A Study of Response Agreement, Loss Functions, and Prompt Styles](https://aclanthology.org/2025.acl-long.188.pdf)
- **LLaVA-Bench-in-the-Wild** (measurements) — *measured_by*
  > we mainly used LLaVA v1.5 (Liu et al., 2024a) and LLaVA NeXT (Liu et al., 2024b) in 7B and 13B sizes and evaluated them on the LLaVA-Bench COCO and LLaVA-Bench Wild (Liu et al., 2023) datasets to assess open-ended generation quality.
  - [Understanding Multimodal LLMs Under Distribution Shifts: An Information-Theoretic Approach](https://raw.githubusercontent.com/mlresearch/v267/main/assets/oh25a/oh25a.pdf)
- **LLaVA-Med** (measurements) — *measured_by*
  > we adopt LLaVA-Med instruction dataset (Li et al., 2024) as a domain-specific open-ended benchmark on the medical images and corresponding questions.
  - [Understanding Multimodal LLMs Under Distribution Shifts: An Information-Theoretic Approach](https://raw.githubusercontent.com/mlresearch/v267/main/assets/oh25a/oh25a.pdf)

### Associated with
- **Truthfulness** (constructs)
  > We examine CRITIC across diverse tasks: free-form question answering concentrates on truthfulness related to open-ended general factual knowledge (Section 4)
  - [CRITIC: Large Language Models Can Self-Correct with Tool-Interactive Critiquing](https://proceedings.iclr.cc/paper_files/paper/2024/file/fef126561bbf9d4467dbb8d27334b8fe-Paper-Conference.pdf)
- **Knowledge application** (constructs)
  > utilizing the two most widely used tasks: open-ended question-answering and multiple-choice testing. We aim to more accurately evaluate LLMs' knowledge application abilities in real-world scenarios
  - [Delving into the Reversal Curse: How Far Can Large Language Models Generalize?](https://proceedings.neurips.cc/paper_files/paper/2024/file/36b6180f3dab4025ba763e853b044814-Paper-Conference.pdf)
