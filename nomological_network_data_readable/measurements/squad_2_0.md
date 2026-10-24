# SQuAD 2.0
**Type:** Measurement  
**Referenced in:** 23 papers  
**Also known as:** SQuAD v2, SQuAD 2, SQuADv2, SQuAD2.0, SQuAD2, SQuAD v2.0  

## State of the Field

**What it is.** Across papers, SQuAD 2.0 is most commonly described as the Stanford Question Answering Dataset version 2.0, a reading comprehension or question answering benchmark built from Wikipedia articles or passages, sometimes described as expository, where answers are text spans. The prevailing framing also stresses unanswerable questions: models are expected to extract an answer when one exists, or abstain, reject, or identify that no answer exists when the context is insufficient or the text does not support an answer. A few papers describe it more indirectly, as source material for derived question answering or true-false corpora.

**What it is claimed to measure.** Papers use it to measure four behavioral indicators and no constructs. It is most often linked to machine reading comprehension and question answering, and papers also report it as measuring document question answering; a smaller line of work samples from it for an information retrieval task. The reported measurement claims stay at the task level rather than linking the benchmark to constructs.

**Space of uses.** Papers commonly use it as a benchmark alongside GLUE or GLUE-X, and some pair it with other question answering resources such as SQuAD v1.1, TruthfulQA, and TriviaQA. They also use specific settings or subsets, including a 1-shot variant and the rc.nocontext portion, and one study describes it as a suitable testbed because it can be addressed in both discriminative and generative manners. A smaller line repurposes it as source material for document retrieval, true-false data, or other question answering corpora.

## Sources

**[Representation Deficiency in Masked Language Modeling](https://proceedings.iclr.cc/paper_files/paper/2024/file/bfde7fb279709eff53faa074b45840d8-Paper-Conference.pdf)**
> The Stanford Question Answering Dataset 2.0, a reading comprehension dataset that includes unanswerable questions, used to evaluate a model's ability to abstain from answering when no correct answer is present in the context.

**[D.Va: Validate Your Demonstration First Before You Use It](https://aclanthology.org/2025.acl-long.129.pdf) (as "SQuAD v2")**
> Question answering dataset combining span extraction and unanswerable questions, requiring models to either extract an answer or correctly identify when no answer exists.

**[SCOP: Evaluating the Comprehension Process of Large Language Models from a Cognitive View](https://aclanthology.org/2025.acl-long.852.pdf) (as "SQuAD v2.0")**
> The Stanford Question Answering Dataset v2.0, a reading comprehension benchmark based on expository Wikipedia articles where answers are text spans and some questions may be unanswerable.

**[The Logical Implication Steering Method for Conditional Interventions on Transformer Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/kalajdzievski25a/kalajdzievski25a.pdf) (as "SQuAD 2")**
> Question answering benchmark with unanswerable questions, used to assess a model's ability to refrain from answering when context is insufficient.

**[A Middle Path for On-Premises LLM Deployment: Preserving Privacy Without Sacrificing Model Confidentiality](https://aclanthology.org/2025.emnlp-main.420.pdf) (as "SQuADv2")**
> The Stanford Question Answering Dataset (SQuAD) version 2.0, which includes unanswerable questions to test a model's ability to abstain from answering when the text does not support it.

**[PakBBQ: A Culturally Adapted Bias Benchmark for QA](https://aclanthology.org/2025.emnlp-main.818.pdf) (as "SQuAD2.0")**
> The Stanford Question Answering Dataset version 2.0, used as a source for creating other QA corpora like UQA.

**[Enhancing Reasoning Capabilities of LLMs via Principled Synthetic Logic Corpus](https://proceedings.neurips.cc/paper_files/paper/2024/file/8678da90126aa58326b2fc0254b33a8c-Paper-Conference.pdf) (as "SQuAD2")**
> The Stanford Question Answering Dataset (version 2), which includes unanswerable questions to test whether a model knows what it doesn't know.

## Relationships

### → SQuAD 2.0
- **Machine reading comprehension** (behaviors tasks) — *measured_by*
  > “our reading comprehension (RC) fine-tuning datasets include SQuAD 2.0 ...”
  - [RA-DIT: Retrieval-Augmented Dual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/536d18fbb454f80221465f1a42c6f389-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > SuperContext is validated on a comprehensive OOD benchmarks GLUE-X (Yang et al., 2022), and a QA dataset, SQuAD 2.0 (Rajpurkar et al., 2018). (Section 2)
  - [Supervised Knowledge Makes Large Language Models Better In-context Learners](https://proceedings.iclr.cc/paper_files/paper/2024/file/bfa629625fd35bf5b880df464b584a57-Paper-Conference.pdf)
- **Information retrieval** (behaviors tasks) — *measured_by*
  > Document Retrieval In this task the model receives a query and Ndocs randomly assorted documents, and its objective is to return the id of the matching document. Our data is sampled from SQuAD v2 (Rajpurkar et al., 2018). (Section 5)
  - [DeciMamba: Exploring the Length Extrapolation Potential of Mamba](https://proceedings.iclr.cc/paper_files/paper/2025/file/fae0a4535196bf7715c1aef2ccfe283f-Paper-Conference.pdf)
- **Document question answering** (behaviors tasks) — *measured_by*
  > “To this end, we focus on three open-book QA datasets: 1. SQuAD 2.0 (Rajpurkar et al., 2018): A reading comprehension benchmark where a model is presented a question along with a Wikipedia article containing the answer.”
  - [AttriBoT: A Bag of Tricks for Efficiently Approximating Leave-One-Out Context Attribution](https://proceedings.iclr.cc/paper_files/paper/2025/file/2aab664e0d1656e8b56c74f868e1ea69-Paper-Conference.pdf)
