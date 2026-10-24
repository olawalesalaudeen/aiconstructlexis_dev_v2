# Open LLM Leaderboard v2
**Type:** Measurement  
**Referenced in:** 6 papers  
**Also known as:** Open LLM Leaderboard 2, Open LLM Leaderboard V2, HuggingFace OpenLLM Leaderboard 2, HuggingFace Open LLM Leaderboard 2  

## State of the Field

**What it is.** Papers commonly describe Open LLM Leaderboard v2, also written as Open LLM Leaderboard 2 or Huggingface Leaderboard v2, as a Hugging Face evaluation suite or public leaderboard for benchmarking and ranking LLMs on challenging downstream tasks. The prevailing description specifies six tasks, BBH, GPQA, IFEval, MATH-Hard or MATH Level 5, MMLU-Pro, and MuSR or MUSR, covering reasoning, knowledge or expert knowledge, advanced math, and instruction following, usually with accuracy-based scoring. Some definitions additionally frame it as a more challenging version of the earlier Open LLM Leaderboard, and one description notes that its scores are normalized to a 0 to 100 scale.

**What it is claimed to measure.** Papers link this instrument to 3 constructs and no behavioral indicators. Different papers use it to measure General ability, Knowledge understanding, and World knowledge, so the recorded measurement claims name several broad constructs rather than a single one. The relationship language is consistent in treating the leaderboard as the instrument that measures those constructs.

**Space of uses.** In use, papers position it as a benchmark evaluation suite for model performance and general capability assessment. It is used alongside MixEval for benchmark evaluation of general capabilities and alongside TruthfulQA in a knowledge and understanding evaluation setup, and another paper reports evaluating performance on it with the LM Evaluation Harness.

## Sources

**[ATLANTIS: Weak-to-Strong Learning via Importance Sampling](https://aclanthology.org/2025.acl-long.52.pdf) (as "Open LLM Leaderboard 2")**
> Benchmark suite assessing model performance across six tasks: BBH, GPQA, IFEval, MATH-Hard, MMLU-Pro, and MUSR, covering reasoning, knowledge, and instruction-following abilities using accuracy-based metrics.

**[``Give Me BF16 or Give Me Death''? Accuracy-Performance Trade-Offs in LLM Quantization](https://aclanthology.org/2025.acl-long.1304.pdf) (as "Open LLM Leaderboard V2")**
> More challenging version of the Open LLM Leaderboard that includes expert knowledge benchmarks (MMLU-Pro, GPQA, Big Bench Hard), multi-step reasoning (MuSR), advanced math (MATH Level 5), and instruction following (IFEval), with scores normalized to a 0–100 scale.

**[Magnetic Preference Optimization: Achieving Last-iterate Convergence for Language Model Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/5833b4daf5b076dd1cdb362b163dff0c-Paper-Conference.pdf)**
> An evaluation suite by Hugging Face that assesses LLM performance on a collection of challenging benchmark tasks.

**[WildChat-50M: A Deep Dive Into the Role of Synthetic Data in Post-Training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/feuer25a/feuer25a.pdf) (as "HuggingFace OpenLLM Leaderboard 2")**
> A public leaderboard and evaluation suite from HuggingFace used to assess instruction following and world knowledge.

## Relationships

### → Open LLM Leaderboard v2
- **General ability** (constructs) — *measured_by*
  > To evaluate the general capabilities of the self-play fine-tuned models, we employ MixEval (Ni et al., 2024) and Open LLM Leaderboard v2 (Fourrier et al., 2024) for benchmark evaluation. (Section 4.2)
  - [Magnetic Preference Optimization: Achieving Last-iterate Convergence for Language Model Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/5833b4daf5b076dd1cdb362b163dff0c-Paper-Conference.pdf)
- **Knowledge understanding** (constructs) — *measured_by*
  > We use Open LLM Leaderboard 2 (Fourrier et al., 2024), and TruthfulQA (Lin et al., 2021) for the evaluation. (Section 3.2, under the heading 'Knowledge & Understanding')
  - [ATLANTIS: Weak-to-Strong Learning via Importance Sampling](https://aclanthology.org/2025.acl-long.52.pdf)
- **World knowledge** (constructs) — *measured_by*
  > For instruction following and world knowledge, we utilize the recent HuggingFace OpenLLM Leaderboard 2 (Fourrier et al., 2024). (Section 3.1)
  - [WildChat-50M: A Deep Dive Into the Role of Synthetic Data in Post-Training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/feuer25a/feuer25a.pdf)
- **Language modeling** (behaviors tasks) — *measured_by*
  > We start by benchmarking xLSTM 7B against state-of-the-art Transformer and recurrent LLMs on the 7B parameter scale. To this end, we evaluate the performance on the Open LLM Leaderboard v2 using the LM Evaluation Harness (Gao et al., 2024; Fourrier et al., 2024). (Section 5.1)
  - [xLSTM 7B: A Recurrent LLM for Fast and Efficient Inference](https://raw.githubusercontent.com/mlresearch/v267/main/assets/beck25b/beck25b.pdf)
- **Model merging** (behaviors tasks) — *measured_by*
  > “we conducted a new set of experiments using the Open LLM Leaderboard 2”
  - [CABS: Conflict-Aware and Balanced Sparsification for Enhancing Model Merging](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25x/yang25x.pdf)
