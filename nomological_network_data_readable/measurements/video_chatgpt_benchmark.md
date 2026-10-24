# Video-ChatGPT benchmark
**Type:** Measurement  
**Referenced in:** 3 papers  
**Also known as:** Video-ChatGPT test set, VideoChatGPT  

## State of the Field

**What it is.** Across papers, the prevailing usage is as an evaluation benchmark or test set for video understanding and question answering. Definitions vary somewhat: it is described as a generative performance benchmark for video-based conversational models, a test set for detailed video understanding that is used to assess general video question answering performance, and a long-video question-answering benchmark. One description explicitly says it includes metrics such as Correctness of Information, Detail Orientation, Contextual Understanding, Temporal Understanding, and Consistency, while another lists correctness, orientation, contextual understanding, temporal understanding, and consistency.

**What it is claimed to measure.** Papers use it to measure 2 constructs and 1 behavioral indicator. The linked constructs are Temporal understanding and Video understanding, and the linked behavioral indicator is Video question answering. The claims are spread across these targets rather than centered on one alone: some papers present it as evaluating video understanding, one ties it to Temporal understanding through its named metrics, and another uses it to assess general video question answering performance.

**Space of uses.** No other measurement instrument is linked to it. Papers position it as an evaluation benchmark or test set: one study uses it alongside MSVD-QA, MSRVTT-QA, and ActivityNet-QA, while another includes it among open-ended video question-answering benchmarks for zero-shot evaluation and reports results on it in a benchmark table.

## Sources

**[Dense Connector for MLLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/3a10c46572628d58cb44fb705f25cbbf-Paper-Conference.pdf)**
> A benchmark for evaluating the generative performance of video-based conversational models on criteria such as correctness, detail, and contextual understanding.

**[Artemis:  Towards Referential Understanding in Complex Videos](https://proceedings.neurips.cc/paper_files/paper/2024/file/cf8ec6e5eb9b52bae998dc534713848d-Paper-Conference.pdf) (as "Video-ChatGPT test set")**
> A test set designed for evaluating detailed video understanding via large vision and language models, used here to assess general video question answering performance.

**[Streaming Long Video Understanding with Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d7ce06e9293c3d8e6cb3f80b4157f875-Paper-Conference.pdf) (as "VideoChatGPT")**
> A long-video question-answering benchmark used to evaluate detailed video understanding across correctness, orientation, contextual understanding, temporal understanding, and consistency dimensions.

## Relationships

### → Video-ChatGPT benchmark
- **Video question answering** (behaviors tasks) — *measured_by*
  > We test the trained model on the Video-ChatGPT test set [37] and the other three benchmarks (i.e., MSVD-QA [8], MSRVTT-QA [53], and ActivityNet-QA [6, 58]) where their training sets was not used to train Artemis. (Section 4.2).
  - [Artemis:  Towards Referential Understanding in Complex Videos](https://proceedings.neurips.cc/paper_files/paper/2024/file/cf8ec6e5eb9b52bae998dc534713848d-Paper-Conference.pdf)
- **Temporal understanding** (constructs) — *measured_by*
  > ...and the newly proposed generative performance benchmark [51], include evaluation metrics such as Correctness of Information (CI), Detail Orientation (DO), Contextual Understanding (CU), Temporal Understanding (TU), and Consistency (CO). (Section 4.1)
  - [Dense Connector for MLLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/3a10c46572628d58cb44fb705f25cbbf-Paper-Conference.pdf)
