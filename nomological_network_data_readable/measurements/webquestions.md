# WebQuestions
**Type:** Measurement  
**Referenced in:** 40 papers  
**Also known as:** WebQuestion, WebQS, WebQ, WebQs, Webquestions, Web Questions, WQA, web_questions  

## State of the Field

**What it is.** Across papers, the dominant description is as an open-domain question answering dataset or benchmark, though some papers call it generative or open-ended text QA. Most definitions describe questions drawn from the web, Google Search, natural web queries, or the Google Suggest API, and several add that the answers are entities in Freebase; one paper more specifically says Berant et al. collected question-answer pairs from the Freebase knowledge database, and another reports a test set of 2032 questions. A smaller line of work frames it as a fact-recall or closed-book question answering benchmark, and spoken QA papers use synthesized or adapted audio versions of Web Questions.

**What it is claimed to measure.** Measurement claims are spread across several targets: papers use it to measure 7 behavioral indicators and 3 constructs. The prevailing usage is to measure open-domain question answering; papers also use it for spoken question answering, factual recall, question answering, and, at the construct level, world knowledge. Across the recorded links, it is used for more than one construct or behavioral indicator rather than a single target alone.

**Space of uses.** Across papers, it usually appears as one element in larger benchmark suites rather than as a standalone instrument, most commonly paired with Natural Questions and TriviaQA, and in some settings with HotpotQA, SQuAD, and Llama Questions. Papers variously use it as a closed-book or open-domain QA test set, as a 1-shot or 5-shot evaluation with exact match, and in one RAG evaluation under Span EM. Some papers also use its training split to construct training data, treat it as an unseen evaluation task, or adapt it into synthesized spoken-audio benchmarks.

## Sources

**[BTR: Binary Token Representations for Efficient Retrieval Augmented Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/c0f721d329c1a10546869c783e866fb7-Paper-Conference.pdf)**
> An open-domain question answering dataset used to examine more generic QA performance.

**[Towards Green AI in Fine-tuning Large Language Models via Adaptive Backpropagation](https://proceedings.iclr.cc/paper_files/paper/2024/file/b054fadf1ccd80b37d465f6082629934-Paper-Conference.pdf) (as "WebQuestion")**
> A generative question answering dataset used to evaluate models on open-domain QA tasks, referenced in the appendix for additional experiments.

**[CorDA: Context-Oriented Decomposition Adaptation of Large Language Models for Task-Aware Parameter-Efficient Fine-tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/83f95bb0ac5046338ea2afe3390e9f4b-Paper-Conference.pdf) (as "WebQS")**
> A question-answering benchmark used to evaluate world knowledge retention.

**[Reasoning of Large Language Models over Knowledge Graphs with Super-Relations](https://proceedings.iclr.cc/paper_files/paper/2025/file/0c6799a1a5db47be8864fed46ba77697-Paper-Conference.pdf) (as "WebQ")**
> The WebQuestions (WebQ) dataset, an open-domain question answering benchmark where questions are sourced from the web and answers are entities in Freebase.

**[Theory, Analysis, and Best Practices for Sigmoid Self-Attention](https://proceedings.iclr.cc/paper_files/paper/2025/file/a43b459e9fab3a703148ba0c83b8a442-Paper-Conference.pdf) (as "WebQs")**
> The WebQuestions dataset, which consists of questions from Google Search that can be answered using Freebase, testing open-domain question answering.

**[Long-Context LLMs Meet RAG: Overcoming Challenges for Long Inputs in RAG](https://proceedings.iclr.cc/paper_files/paper/2025/file/5df5b1f121c915d8bdd00db6aac20827-Paper-Conference.pdf) (as "Webquestions")**
> A question-answering dataset of questions from web users, used as an unseen evaluation task.

**[Scaling Speech-Text Pre-training with Synthetic Interleaved Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/7b5ae891000049b91b3b62de596b1560-Paper-Conference.pdf) (as "Web Questions")**
> A dataset for spoken question answering that contains questions sourced from the web, requiring the model to provide factual answers.

**[Chain-of-Action: Faithful and Multimodal Question Answering through Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a0b1082fc7823c4c68abcab4fa850e9c-Paper-Conference.pdf) (as "WQA")**
> Web-based QA benchmark used to evaluate question answering over web information.

**[Two-stage LLM Fine-tuning with Less Specialization and More Generalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/597254dc45be8c166d3ccf0ba2d56325-Paper-Conference.pdf) (as "web_questions")**
> Question answering dataset consisting of factual questions extracted from web queries, used to evaluate in-context learning performance.

## Relationships

### → WebQuestions
- **Open-domain question answering** (behaviors tasks) — *measured_by*
  > Moreover, in order to examine ToG on more generic tasks, we also prepare one open-domain QA dataset: WebQuestions (Berant et al., 2013);
  - [Think-on-Graph: Deep and Responsible Reasoning of Large Language Model on Knowledge Graph](https://proceedings.iclr.cc/paper_files/paper/2024/file/10a6bdcabbd5a3d36b760daa295f63c1-Paper-Conference.pdf)
- **Spoken question answering** (behaviors tasks) — *measured_by*
  > Similarly, on the Web Questions test set, the proposed model attains an accuracy of 6.1%, while SpeechGPT yields a comparable accuracy of 6.5%. (Section 4.2.3)
  - [Spoken Question Answering and Speech Continuation Using Spectrogram-Powered LLM](https://proceedings.iclr.cc/paper_files/paper/2024/file/e393677793767624f2821cec8bdd02f1-Paper-Conference.pdf)
- **Factual recall** (behaviors tasks) — *measured_by*
  > (f) fact recall (WebQuestions (Berant et al., 2013), Natural Questions (Kwiatkowski et al., 2019)) (Section 4.2)
  - [Think before you speak: Training Language Models With Pause Tokens](https://proceedings.iclr.cc/paper_files/paper/2024/file/76917808731dae9e6d62c2a7a6afb542-Paper-Conference.pdf)
- **World knowledge** (constructs) — *measured_by*
  > The world knowledge is evaluated by the exact match scores (%) on TriviaQA [23], NQ open [29], and WebQS [4] (Section 4).
  - [CorDA: Context-Oriented Decomposition Adaptation of Large Language Models for Task-Aware Parameter-Efficient Fine-tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/83f95bb0ac5046338ea2afe3390e9f4b-Paper-Conference.pdf)
- **Closed-book question answering** (behaviors tasks) — *measured_by*
  > Closed book QA: TriviaQA (Joshi et al., 2017), web_questions (Berant et al., 2013) (Section 5.1).
  - [Two-stage LLM Fine-tuning with Less Specialization and More Generalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/597254dc45be8c166d3ccf0ba2d56325-Paper-Conference.pdf)
- **Knowledge graph question answering** (behaviors tasks) — *measured_by*
  > We evaluate LMP on five KGQA datasets: WebQSP (Yih et al., 2016), CWQ (Talmor and Berant, 2018), and GrailQA (Gu et al., 2021) for multi-hop QA; Simple Questions (Bordes et al., 2015) for single-hop QA; WebQuestions (Berant et al., 2013) for open-domain QA. (Section 4.1.1)
  - [Digest the Knowledge: Large Language Models empowered Message Passing for Knowledge Graph Question Answering](https://aclanthology.org/2025.acl-long.750.pdf)
- **Multi-hop reasoning** (constructs) — *measured_by*
  > We evaluate our approach on four standard KBQA datasets, all of which require multi-hop reasoning: ComplexWebQuestions (CWQ), WebQuestionsSP (WebQSP), WebQuestions, and GrailQA (Section 5).
  - [iQUEST: An Iterative Question-Guided Framework for Knowledge Base Question Answering](https://aclanthology.org/2025.acl-long.760.pdf)
- **Multi-hop question answering** (behaviors tasks) — *measured_by*
  > We conduct experiments on five multi-hop QA datasets: HotPotQA (Yang et al., 2018), 2WikiMultiHopQA (2Wiki) (Ho et al., 2020), MuSiQue (Trivedi et al., 2022), Bamboogle (Press et al., 2023) and WebQuestions (WebQA) (Berant et al., 2013). (Section 4.1)
  - [KiRAG: Knowledge-Driven Iterative Retriever for Enhancing Retrieval-Augmented Generation](https://aclanthology.org/2025.acl-long.929.pdf)
- **Factuality** (constructs) — *measured_by*
  > We evaluate factual correctness and spoken question answering abilities of our model on Llama Questions (Nachmani et al., 2024), and a synthesized audio version of TriviaQA (Joshi et al., 2017) and Web Questions (Berant et al., 2013). (Section 5.4)
  - [Aligning Spoken Dialogue Models from User Interactions](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25t/wu25t.pdf)
