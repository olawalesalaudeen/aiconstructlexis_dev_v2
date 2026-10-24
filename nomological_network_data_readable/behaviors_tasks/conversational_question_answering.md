# Conversational question answering
**Type:** Behavior  
**Referenced in:** 15 papers  
**Also known as:** Interactive question answering, Multi-turn QA, Multi-turn question answering, Dialogue question answering  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats this behavior as answering questions in a conversational, multi-turn setting, where the current response must use dialogue history rather than isolated factoids. Definitions repeatedly describe a series of interconnected questions or clarifications, often aimed at resolving a complex initial query, and several papers explicitly say the questions are part of a dialogue or ongoing conversation. A smaller set of formulations narrows this further to answers grounded in a provided context, such as conversational text, story dialogue, or other task-specific material.

**Variants.** Papers use several nearby names for the same general behavior, including interactive question answering, multi-turn QA, multi-turn question answering, and dialogue question answering. The studied settings vary widely: some work centers on grounded questions and answers tied to scientific documents, tables, and contextual visual information; some frames it as answering financial questions while maintaining conversation history; and some studies use multi-round dialogue about video content, timing, and action sequences, or story-based dialogue context.

**Space of elicitation and scores.** Papers measure this behavior with three instruments. CoQA is the most common and is described as a conversational question answering dataset with short-answer questions based on conversational text; individual papers also measure it with ChatRAG-Bench, described as a RAG benchmark for conversational QA tasks within a 4K context window, and MT-Bench, described as a benchmark of multi-turn questions. Across these links, the instruments are benchmark datasets or evaluation benchmarks.

## Sources

**[cPAPERS: A Dataset of Situated and Multimodal Interactive Conversations in Scientific Papers](https://proceedings.neurips.cc/paper_files/paper/2024/file/7a19a9d527ed544d1272f07b0f8f934e-Paper-Datasets_and_Benchmarks_Track.pdf)**
> Generating a natural language response to a user's question in a conversational context, where the questions are not simple factoids but part of a dialogue.

**[IQA-EVAL: Automatic Evaluation of Human-Model Interactive Question Answering](https://proceedings.neurips.cc/paper_files/paper/2024/file/c6a23b26eaaefd187973658f5001f4fe-Paper-Conference.pdf) (as "Interactive question answering")**
> A multi-turn process where a user interacts with an AI model through a series of questions and clarifications to arrive at an answer for a complex initial query.

**[SlowFocus: Enhancing Fine-grained Temporal Understanding in Video LLM](https://proceedings.neurips.cc/paper_files/paper/2024/file/94ef721705ea95d6981632be62bb66e2-Paper-Conference.pdf) (as "Multi-turn QA")**
> Engaging in multi-round question-answer dialogue about a video, including questions about content, timing, and action sequences.

**[Backtracking Improves Generation Safety](https://proceedings.iclr.cc/paper_files/paper/2025/file/65beb73449888fabcf601b3a3ef4b3a7-Paper-Conference.pdf) (as "Multi-turn question answering")**
> The behavior of engaging in a conversational dialogue over several turns to answer a user's questions.

**[HShare: Fast LLM Decoding by Hierarchical Key-Value Sharing](https://proceedings.iclr.cc/paper_files/paper/2025/file/de7dc701a2882088f3136139949e1d05-Paper-Conference.pdf) (as "Dialogue question answering")**
> Answering questions grounded in conversational or story-based dialogue context.

## Relationships

### Conversational question answering →
- **CoQA** (measurements) — *measured_by*
  > We use a relation extraction dataset ZSRE (Meng et al., 2022a) and a conversational question answering dataset CoQA (Reddy et al., 2019) to represent unrelated tasks
  - [BadEdit: Backdooring Large Language Models by Model Editing](https://proceedings.iclr.cc/paper_files/paper/2024/file/6f6fe6789e14796b6544a04b20d11902-Paper-Conference.pdf)
- **MT-Bench** (measurements) — *measured_by*
  > “MT-Bench (Zheng et al., 2023), a challenging benchmark of multi-turn questions”
  - [Backtracking Improves Generation Safety](https://proceedings.iclr.cc/paper_files/paper/2025/file/65beb73449888fabcf601b3a3ef4b3a7-Paper-Conference.pdf)
- **ChatRAG-Bench** (measurements) — *measured_by*
  > the RAG benchmark for conversational QA tasks within a 4K context window. (Section 1)
  - [ChatQA 2: Bridging the Gap to Proprietary LLMs in Long Context and RAG Capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/a7b562dac391e9c7af691e8ef886ad10-Paper-Conference.pdf)
