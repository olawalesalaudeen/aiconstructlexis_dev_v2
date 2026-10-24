# TriviaQA
**Type:** Measurement  
**Referenced in:** 196 papers  
**Also known as:** TRIVIAQA, TrivialQA, Trivia-QA, TQ  

## State of the Field

**What it is.** Across the literature, the prevailing usage treats TriviaQA as a question answering benchmark, most often described as a reading-comprehension or open-domain dataset of trivia questions, with question-answer pairs often said to be authored by trivia enthusiasts and sometimes accompanied by evidence or source documents. Some papers instead frame it as a closed-book QA benchmark with short or free-form factual answers, sometimes using the Wikipedia partition or validation split without supporting evidence in context. Descriptions also differ on format and scale, with papers referring to 95K question-answer pairs, over 650K question-answer-evidence triples, the TQ abbreviation for in-domain evaluation, a 1000-question subset of the dev split, and a synthesized audio version.

**What it is claimed to measure.** Papers use TriviaQA to measure a broad spread of outcomes rather than a single target: it is linked to 18 constructs and 16 behavioral indicators. The most common claims are that it measures question answering, especially open-domain and factual question answering, and that it measures world knowledge and factuality. The remaining links are dispersed across many other constructs and behaviors.

**Space of uses.** The prevailing pattern is to include TriviaQA in multi-benchmark evaluations, most often alongside Natural Questions, WebQuestions or WebQ, HotpotQA, and PopQA. Papers position it variously as a main benchmark for open-domain, retrieval-augmented, or closed-book QA, as an unseen or out-of-domain test set, and occasionally as source material for training or for generating evidence and dialogue conditions. Papers connect it to three other instruments overall; the clearest named link is HELMET, which one paper relates to TriviaQA as a curation source for long-context factoid QA.

## Sources

**[BTR: Binary Token Representations for Efficient Retrieval Augmented Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/c0f721d329c1a10546869c783e866fb7-Paper-Conference.pdf)**
> TriviaQA is a closed-book question answering dataset used for evaluation, featuring questions with short, factual answers.

**[SePer: Measure Retrieval Utility Through The Lens Of Semantic Perplexity Reduction](https://proceedings.iclr.cc/paper_files/paper/2025/file/c44c4afd77d5ee760e7f4bed0c50f878-Paper-Conference.pdf) (as "TRIVIAQA")**
> A reading comprehension dataset containing question-answer pairs authored by trivia enthusiasts, used for evaluating question answering systems.

**[SmartRAG: Jointly Learn RAG-Related Tasks From the Environment Feedback](https://proceedings.iclr.cc/paper_files/paper/2025/file/83ccb398f3ce9c4d137011f36a03c7d4-Paper-Conference.pdf) (as "TrivialQA")**
> A question answering dataset where questions are authored by people without seeing the evidence documents, reflecting a more natural information-seeking process.

**[Ultra-Sparse Memory Network](https://proceedings.iclr.cc/paper_files/paper/2025/file/d78d68cae595fabadd187b583ee8708e-Paper-Conference.pdf) (as "Trivia-QA")**
> A reading comprehension dataset containing question-answer pairs authored by trivia enthusiasts, used to assess a model's ability to find answers in provided documents.

**[DeepResearcher: Scaling Deep Research via Reinforcement Learning in Real-world Environments](https://aclanthology.org/2025.emnlp-main.22.pdf) (as "TQ")**
> The TriviaQA (TQ) benchmark, an open-domain question answering dataset used for in-domain evaluation.

## Relationships

### → TriviaQA
- **Question answering** (behaviors tasks) — *measured_by*
  > In this section, we implement and evaluate Conformal Alignment in question-answering tasks, where we consider a conversational question answering dataset TriviaQA [21] and a closed-book reading comprehension dataset CoQA [39]. (Section 4)
  - [Conformal Alignment: Knowing When to Trust Foundation Models with Guarantees](https://proceedings.neurips.cc/paper_files/paper/2024/file/870ccde24673d3970a680bb48496ed63-Paper-Conference.pdf)
- **Open-domain question answering** (behaviors tasks) — *measured_by*
  > We evaluate BTR on five knowledge-rich NLP tasks, including three open-domain question-answering tasks (NaturalQuestions (Kwiatkowski et al., 2019), TriviaQA (Joshi et al., 2017), and WebQA (Berant et al., 2013)) (Section 2).
  - [BTR: Binary Token Representations for Efficient Retrieval Augmented Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/c0f721d329c1a10546869c783e866fb7-Paper-Conference.pdf)
- **World knowledge** (constructs) — *measured_by*
  > For general knowledge on facts, we report the performance on Natural Questions (0-shot) [40] and TriviaQA (0-shot) [41].
  - [BAM! Just Like That: Simple and Efficient Parameter Upcycling for Mixture of Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/665bb142d4b9f55660cb89bb56a66fe1-Paper-Conference.pdf)
- **Factuality** (constructs) — *measured_by*
  > Factuality (Fac): Considering unlearning negates the original knowledge acquired by the model, we evaluate the factuality on TriviaQA [27] with 6-shot, and F1 scores are reported; (Section 3.3.2)
  - [RWKU: Benchmarking Real-World Knowledge Unlearning for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/b1f78dfc9ca0156498241012aec4efa0-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Generalization** (constructs) — *measured_by*
  > To test generalization (Section 4.4), we additionally evaluate on MATH (4-shot) (Hendrycks et al., 2021b), MBPP (3-shot) (Austin et al., 2021), NaturalQuestions (5-shot) (Kwiatkowski et al., 2019), TriviaQA (5-shot) (Joshi et al., 2017), Hellaswag (0-shot) (Zellers et al., 2019), PIQA (0-shot) (Bisk et al., 2020), and TruthfulQA (0-shot) (Lin et al., 2022).
  - [Self-MoE: Towards Compositional Large Language Models with Self-Specialized Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/558a100caa93422df215fadb9e9b1dd7-Paper-Conference.pdf)
- **Factual recall** (behaviors tasks) — *measured_by*
  > We plot the accuracy versus sparsity for the OPT-13B, OPT-30B, LLaMA-13B, and LLaMA-33B models on TriviaQA dataset for fact recall evaluation (left).
  - [The Cost of Scaling Down Large Language Models: Reducing Model Size Affects Memory before In-context Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/bb68f698772f14b6d8eaef4529fb9176-Paper-Conference.pdf)
- **Text generation** (behaviors tasks) — *measured_by*
  > We have conducted additional experiments on more realistic open-ended generations datasets, Hot-PotQA [57], Natural Question (NQ) [23], TriviaQA [21]. (Appendix D)
  - [SLED: Self Logits Evolution Decoding for Improving Factuality in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/0939f13ffce3ff487509d902ddba4571-Paper-Conference.pdf)
- **Factual question answering** (behaviors tasks) — *measured_by*
  > For factual question answering, we use the TriviaQA dataset (Joshi et al., 2017) with a 10K testing set
  - [Generalization v.s. Memorization: Tracing Language Models’ Capabilities Back to Pretraining Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/7cdf000d22c6cda21f3cbd7467aaf26f-Paper-Conference.pdf)
- **Spoken question answering** (behaviors tasks) — *measured_by*
  > Spoken Question Answering ... We evaluate our model on 3 datasets in D´efossez et al. (2024): Web Questions (Berant et al., 2013), Llama Questions (Nachmani et al., 2024), and TriviaQA (Joshi et al., 2017).
  - [Scaling Speech-Text Pre-training with Synthetic Interleaved Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/7b5ae891000049b91b3b62de596b1560-Paper-Conference.pdf)
- **Factual knowledge** (constructs) — *measured_by*
  > For factual knowledge, we use PopQA (Mallen et al., 2023), TriviaQA (Joshi et al., 2017), and Natural Questions (NQ) (Kwiatkowski et al., 2019). (Section 5)
  - [LLM Braces: Straightening Out LLM Predictions with Relevant Sub-Updates](https://aclanthology.org/2025.acl-long.393.pdf)
- **Knowledge** (constructs) — *measured_by*
  > The input for the task is knowledge-intensive questions from TriviaQA (Joshi et al., 2017). (p. 5)
  - [Benchmarking and Improving Generator-Validator Consistency of Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/bfcb583d225b1db8d3ca2331f6785774-Paper-Conference.pdf)
- **Open-ended question answering** (behaviors tasks) — *measured_by*
  > We cover four open-ended quenstion-answering datasets: TriviaQA (Joshi et al., 2017), Sciq (Welbl et al., 2017), WikiQA (Yang et al., 2015), and NQ (Kwiatkowski et al., 2019). (Section 4.1)
  - [Influences on LLM Calibration: A Study of Response Agreement, Loss Functions, and Prompt Styles](https://aclanthology.org/2025.acl-long.188.pdf)
- **Reasoning** (constructs) — *measured_by*
  > The reasoning tasks include MathQA (Amini et al., 2019), Massive Multitask Language Understanding (MMLU) (Hendrycks et al., 2020), Physical Interaction: Question Answering (PIQA) (Bisk et al., 2020), LogiQA (Liu et al., 2020), TriviaQA (Joshi et al., 2017) and GSM8K (Cobbe et al., 2021). (Section 5.3)
  - [Disentangling Biased Knowledge from Reasoning in Large Language Models via Machine Unlearning](https://aclanthology.org/2025.acl-long.305.pdf)
- **Closed-book question answering** (behaviors tasks) — *measured_by*
  > Closed book QA: TriviaQA (Joshi et al., 2017), web_questions (Berant et al., 2013) (Section 5.1).
  - [Two-stage LLM Fine-tuning with Less Specialization and More Generalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/597254dc45be8c166d3ccf0ba2d56325-Paper-Conference.pdf)
- **Information retrieval** (behaviors tasks) — *measured_by*
  > We conduct main experiments on Natural Questions (NQ) [21] and TriviaQA [18] datasets, both of which are widely used retrieval benchmarks... We use passage-level Hits@{1, 5} and Mean Reciprocal Rank (MRR)@5 as evaluation metrics.
  - [Self-Retrieval: End-to-End Information Retrieval with One Large Language Model](https://proceedings.neurips.cc/paper_files/paper/2024/file/741ad162ab0f3da6f9aad60e9e34f5f1-Paper-Conference.pdf)
- **Honesty** (constructs) — *measured_by*
  > Results of LLaMA2-Chat-13B on the TriviaQA evaluation set are shown in Tab. 3... enhance the honesty score
  - [Alignment for Honesty](https://proceedings.neurips.cc/paper_files/paper/2024/file/7428e6db752171d6b832c53b2ed297ab-Paper-Conference.pdf)
- **Benign question answering** (behaviors tasks) — *measured_by*
  > TriviaQA is a normal question-answering dataset for reading comprehension, and we sample 230 examples for our benign answer evaluation. (Section 5.1)
  - [Protecting Your LLMs with Information Bottleneck](https://proceedings.neurips.cc/paper_files/paper/2024/file/34a1fc7890141f1ada3d8bc6199cce07-Paper-Conference.pdf)
- **Calibration** (constructs) — *measured_by*
  > We then finetune three different LLMs (Mistral-7B, Llama3-8B, Llama3-70B) with LACIE, and show that the models resulting from this multi-agent optimization are better calibrated on TriviaQA with respect to a simulated listener. (Abstract)
  - [LACIE: Listener-Aware Finetuning for Calibration in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/4b8eaf3bcdc105423a972ed90eb07217-Paper-Conference.pdf)
- **Document understanding** (constructs) — *measured_by*
  > "We also observe that xRAG performs well in tasks that require document understanding, such as TriviaQA."
  - [xRAG: Extreme Context Compression for Retrieval-augmented Generation with One Token](https://proceedings.neurips.cc/paper_files/paper/2024/file/c5cf13bfd3762821ef7607e63ee90075-Paper-Conference.pdf)
- **Machine reading comprehension** (behaviors tasks) — *measured_by*
  > Reading Comprehension:TriviaQA [42] (0-shot), with the assessment based on the exact match from context. (Section 3.1).
  - [Should We Really Edit Language Models? On the Evaluation of Edited Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/370fa2e691f57eb319bc263a07dad4a5-Paper-Conference.pdf)
- **Knowledge-based question answering** (behaviors tasks) — *measured_by*
  > “Datastore scaling brings major improvements to knowledge-intensive question answering tasks such as NQ and TQA”
  - [Scaling Retrieval-Based Language Models with a Trillion-Token Datastore](https://proceedings.neurips.cc/paper_files/paper/2024/file/a5d8aba27dfef4e849e8cb03fb87a954-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > As shown in Appendix E.2, we assessed each iteration’s performance on general benchmarks, including GSM8k (Cobbe et al., 2021), TriviaQA (Joshi et al., 2017), MMLU (Hendrycks et al., 2020), and HumanEval (Chen et al., 2021). (Section 3.3)
  - [SPaR: Self-Play with Tree-Search Refinement to Improve Instruction-Following in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/abe1eb21ceb046209c96a0f5e7544ccc-Paper-Conference.pdf)
- **Knowledge conflict resolution** (constructs) — *measured_by*
  > We benchmark the current LLM’s ability to perform situated faithful reasoning on several question-answering tasks, including FreshQA (Vu et al., 2023), NaturalQA (Kwiatkowski et al., 2019), TriviaQA (Joshi et al., 2017), PopQA (Mallen et al., 2023).
  - [To Trust or Not to Trust? Enhancing Large Language Models' Situated Faithfulness to External Contexts](https://proceedings.iclr.cc/paper_files/paper/2025/file/186a213d720568b31f9b59c085a23e5a-Paper-Conference.pdf)
- **Hallucination resistance** (constructs) — *measured_by*
  > Gekhman et al. (2024) shows that finetuning on factual information encourages hallucinations, something that we verify observing the significant degradation on TriviaQA and NQ-Open, which are knowledge-based benchmarks.
  - [From Artificial Needles to Real Haystacks: Improving Retrieval Capabilities in LLMs by Finetuning on Synthetic Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/15a321fbfc19fce9b325ec6e77dfb597-Paper-Conference.pdf)
- **In-context learning** (constructs) — *measured_by*
  > "We evaluate APE on three ICL tasks using the LM Evaluation Harness (Gao et al., 2024):: ... TriviaQA (5-shot)"
  - [APE: Faster and Longer Context-Augmented Generation via Adaptive Parallel Encoding](https://proceedings.iclr.cc/paper_files/paper/2025/file/ce186a37e63b37638ecd06dee6b9a355-Paper-Conference.pdf)
- **Short-form question answering** (behaviors tasks) — *measured_by*
  > We conduct our experiments with a multiple-choice (MMLU (Hendrycks et al., 2020)) and a short-form (TriviaQA (Joshi et al., 2017)) question answering task, so that we can precisely characterize a model’s output distributions. (Section 4.2)
  - [Unfamiliar Finetuning Examples Control How Language Models Hallucinate](https://aclanthology.org/2025.naacl-long.183.pdf)
- **Helpfulness** (constructs) — *measured_by*
  > TRIVIAQA (Joshi et al., 2017): Assesses the model’s question-answering capability. ... Helpfulness: evaluated as the averaged normalized scores across all general performance benchmarks we considered. (Section 5.1)
  - [Goal-Conditioned DPO: Prioritizing Safety in Misaligned Instructions](https://aclanthology.org/2025.naacl-long.369.pdf)
- **Knowledge reasoning** (constructs) — *measured_by*
  > TriviaQA (Joshi et al., 2017): A large-scale dataset containing knowledge-intensive questions sourced from Wikipedia.
  - [CER: Confidence Enhanced Reasoning in LLMs](https://aclanthology.org/2025.acl-long.390.pdf)
- **Document question answering** (behaviors tasks) — *measured_by*
  > We evaluate Cake across various context lengths using three datasets with different task types: LongChat (Li et al., 2023) for multi-turn conversations, and TriviaQA and NarrativeQA (Bai et al., 2023) for long-document question-answering tasks.
  - [Compute or Load KV Cache? Why Not Both?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jin25d/jin25d.pdf)
- **Retrieval-augmented generation** (behaviors tasks) — *measured_by*
  > In addition, we make TriviaQA (Joshi et al., 2017) dataset for additional RAG task... (Section 4.1.2).
  - [Faster In-Context Learning for LLMs via N-Gram Trie Speculative Decoding](https://aclanthology.org/2025.emnlp-main.911.pdf)

### Associated with
- **HELMET** (measurements)
  > For testing on factoid QA tasks, we use HotpotQA (Yang et al., 2018), Natural Questions (NQ) (Kwiatkowski et al., 2019), and TriviaQA (Joshi et al., 2017), as curated by HELMET (Yen et al., 2025) for long-context benchmarking with 128k input tokens. (Section 4.1)
  - [Efficient Context Selection for Long-ContextQA: No Tuning, No Iteration, Just Adaptive‐k](https://aclanthology.org/2025.emnlp-main.1017.pdf)
- **Knowledge retrieval** (behaviors tasks)
  > we use the question data from question-answering training data, such as TriviaQA [23] and Natural Questions [27, 29], to obtain the covariance matrices whose pattern corresponds to the knowledge retrieving ability of the LLM (Section 3.3).
  - [CorDA: Context-Oriented Decomposition Adaptation of Large Language Models for Task-Aware Parameter-Efficient Fine-tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/83f95bb0ac5046338ea2afe3390e9f4b-Paper-Conference.pdf)
