# WikiQA
**Type:** Measurement  
**Referenced in:** 12 papers  

## State of the Field

**What it is.** Across papers, the prevailing framing is a question-answering benchmark or dataset built from questions paired with Wikipedia sentences or answers. Some definitions narrow this to answer selection, or to open-domain, closed-book question answering, while one calibration study uses it for sentence-level responses because model responses are complete sentences. A smaller usage applies the test set with synthesised speech queries for spoken-query-based question answering.

**What it is claimed to measure.** Papers link it to three behavioral indicators and no constructs. The dominant claim is that WikiQA measures question answering, and smaller lines of work use it to measure open-ended question answering and spoken question answering. The reported measurement claims therefore stay within closely related question-answering behaviors rather than broader constructs.

**Space of uses.** No measurement instrument is linked to it, but papers often use it alongside other benchmarks such as SQuAD, QASC, QuaRTz, TruthfulQA, and HotpotQA. Across studies it is usually one dataset within a larger task suite, including fine-tuning and evaluation setups, sentence-level calibration evaluation, and zero-shot spoken-query evaluation on synthesised WikiQA.

## Sources

**[LitCab: Lightweight Language Model Calibration over Short- and Long-form Responses](https://proceedings.iclr.cc/paper_files/paper/2024/file/3815d62554efad0878fad6c1c30ffda0-Paper-Conference.pdf)**
> A benchmark used here for sentence-level responses in calibration evaluation.

## Relationships

### → WikiQA
- **Question answering** (behaviors tasks) — *measured_by*
  > For question answering, we employ two famous benchmarks: SQuAD (Rajpurkar et al., 2016) and WikiQA (Yang et al., 2015). (Section 3)
  - [CAMEx: Curvature-aware Merging of Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/341d64b067e06c6ebea97a498c90d598-Paper-Conference.pdf)
- **Spoken question answering** (behaviors tasks) — *measured_by*
  > For the SQQA task, the WikiQA (Yang et al., 2015) test set with synthesised speech queries provided by (Tang et al., 2024) was used. (Section 5.1)
  - [Wav2Prompt: End-to-End Speech Prompt Learning and Task-based Fine-tuning for Text-based LLMs](https://aclanthology.org/2025.naacl-long.354.pdf)
- **Open-ended question answering** (behaviors tasks) — *measured_by*
  > We cover four open-ended quenstion-answering datasets: TriviaQA (Joshi et al., 2017), Sciq (Welbl et al., 2017), WikiQA (Yang et al., 2015), and NQ (Kwiatkowski et al., 2019). (Section 4.1)
  - [Influences on LLM Calibration: A Study of Response Agreement, Loss Functions, and Prompt Styles](https://aclanthology.org/2025.acl-long.188.pdf)
