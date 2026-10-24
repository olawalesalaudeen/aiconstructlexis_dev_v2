# Zero-shot prompting
**Type:** Measurement  
**Referenced in:** 13 papers  

## State of the Field

Across the provided literature, Zero-shot prompting is consistently characterized as an evaluation protocol or procedure. The prevailing definition across multiple papers is that it involves providing a model with a task description or instruction without any prior examples or demonstrations. Several sources also specify that this method is used without any task-specific fine-tuning, aiming to assess a model's out-of-the-box capabilities. The stated purpose is to test a model's ability to follow instructions and generalize, as one paper notes it "relies solely on the pre-trained knowledge and generalization abilities of LLMs" (FactEval: Evaluating the Robustness of Fact Verification Systems in the Era of Large Language Models). In practice, it is frequently employed as a baseline method for comparison. Researchers contrast its performance with other approaches such as fine-tuning, few-shot prompting, and chain-of-thought prompting. This protocol is used to measure specific behaviors; for instance, it is used to benchmark models on "Native language identification".

## Sources

**[COLLIE: Systematic Construction of Constrained Text Generation Tasks](https://proceedings.iclr.cc/paper_files/paper/2024/file/a77eadda332b6d4a9ae1e0e4024555f2-Paper-Conference.pdf)**
> Evaluation protocol in which models are given a constraint instruction without any prior examples, testing their ability to follow compositional constraints from instruction alone.

## Relationships

### → Zero-shot prompting
- **Error detection** (behaviors tasks) — *measured_by*
  > "We provide the model with a simple instruction to classify questions into “ok” or “not ok” without introducing any demonstrations."
  - [Are We Done with MMLU?](https://aclanthology.org/2025.naacl-long.262.pdf)
- **Robustness** (constructs) — *measured_by*
  > "We investigate the robustness of several LLMs in zero-shot, few-shot, and chain-of-thought prompting."
  - [FactEval: Evaluating the Robustness of Fact Verification Systems in the Era of Large Language Models](https://aclanthology.org/2025.naacl-long.534.pdf)
- **Native language identification** (behaviors tasks) — *measured_by*
  > We benchmark the three models using both zero-shot prompting as well as task-speciﬁc ﬁne-tuning on the training set.
  - [Tracing L1 Interference in English Learner Writing: A Longitudinal Corpus with Error Annotations](https://aclanthology.org/2025.emnlp-main.766.pdf)
