# Computational efficiency
**Type:** Construct  
**Referenced in:** 68 papers  
**Also known as:** Compute efficiency, Generation efficiency, Decoding efficiency, Inference efficiency, Compute-efficiency, Latency efficiency  

## State of the Field

Across the surveyed literature, computational efficiency is predominantly characterized as a model's ability to perform computations with minimal resource usage, commonly focusing on high speed and low consumption of memory, energy, or general compute. A very frequent framing, often labeled 'inference efficiency' or 'decoding efficiency', narrows this scope to the generation phase, emphasizing lower latency and higher throughput. Papers operationalize this construct through metrics such as speedup factors, with one study noting a "2.73× speedup" ("IceFormer: Accelerated Inference with Long-Sequence Transformers on CPUs"), reduced end-to-end latency, and increased throughput measured in "tokens per second per GPU" ("Puzzle: Distillation-Based NAS for Inference-Optimized LLMs"). Reductions in memory footprint and energy consumption are also common measures of this property. A smaller set of studies conceptualizes it as a balance or trade-off, for example, "considering compute-efficiency and performance trade-off" ("Comparing Specialised Small and General Large Language Models on Text Classification: 100 Labelled Samples to Achieve Break-Even Performance") or weighing efficiency against other goals like safety. The construct is reported to be influenced by factors like `Activation sparsity` and `Token sparsity`, and it is also studied in relation to `Knowledge retention`.

## Sources

**[Backtracking Improves Generation Safety](https://proceedings.iclr.cc/paper_files/paper/2025/file/65beb73449888fabcf601b3a3ef4b3a7-Paper-Conference.pdf) (as "Generation efficiency")**
> The degree to which a model produces useful output with low latency and high throughput during generation.

**[DS-LLM: Leveraging Dynamical Systems to Enhance Both Training and Inference of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/8e016430ec3b2f02222ac8f9f93db2eb-Paper-Conference.pdf)**
> The latent property of a model and its underlying hardware to perform computations with high speed and low energy consumption.

**[Rewarding Progress: Scaling Automated Process Verifiers for LLM Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/98711dea460bdefe0e651ca23ec98ba2-Paper-Conference.pdf) (as "Compute efficiency")**
> The degree to which a search procedure achieves a target performance using less test-time computation.

**[PEARL: Parallel Speculative Decoding with Adaptive Draft Length](https://proceedings.iclr.cc/paper_files/paper/2025/file/03b1043052700b1a471996b0baf309d4-Paper-Conference.pdf) (as "Inference efficiency")**
> The degree to which an LLM can generate outputs with lower latency or higher throughput during decoding.

**[Multi-Draft Speculative Sampling: Canonical Decomposition and Theoretical Limits](https://proceedings.iclr.cc/paper_files/paper/2025/file/04cdf500730af7733a6b13cbbc230206-Paper-Conference.pdf) (as "Decoding efficiency")**
> The degree to which a decoding method reduces the cost of generating tokens while maintaining output quality or target distribution matching.

**[Comparing Specialised Small and General Large Language Models on Text Classification: 100 Labelled Samples to Achieve Break-Even Performance](https://aclanthology.org/2025.emnlp-main.9.pdf) (as "Compute-efficiency")**
> The balance between model performance and the computational resources required for training and inference, allowing comparison across models of different sizes under similar compute budgets.

**[Grammar Pruning: Enabling Low-Latency Zero-Shot Task-Oriented Language Models for Edge AI](https://aclanthology.org/2025.emnlp-main.858.pdf) (as "Latency efficiency")**
> The tendency of a model or decoding procedure to produce outputs quickly enough for real-time or near-real-time use.

## Relationships

### Computational efficiency →
- **Text generation** (behaviors tasks) — *causes*
  > The increased compute efficiency combined with constant memory usage during inference allows spending more compute at test-time, but also enables running models locally on edge devices acting as an interface to the user with fast response times. (Section 1)
  - [xLSTM 7B: A Recurrent LLM for Fast and Efficient Inference](https://raw.githubusercontent.com/mlresearch/v267/main/assets/beck25b/beck25b.pdf)
- **Spec-Bench** (measurements) — *measured_by*
  > “Table 1 and Table 2 present the speed-up metrics compared on MT-Bench and Spec-Bench under greedy and random sampling settings”
  - [Amphista: Bi-directional Multi-head Decoding for Accelerating LLM Inference](https://aclanthology.org/2025.naacl-long.450.pdf)
- **Scalability** (constructs) — *causes*
  > Ferret significantly enhances the scalability of existing federated full-parameter tuning approaches by achieving high computational efficiency, reduced communication overhead, and fast convergence, all while maintaining competitive model accuracy.
  - [Ferret: Federated Full-Parameter Tuning at Scale for Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shu25a/shu25a.pdf)

### → Computational efficiency
- **Activation sparsity** (constructs) — *causes*
  > achieving activation sparsity offers a compelling advantage by providing a favorable balance between accuracy and speedup, especially on modern hardware like GPUs (Liu et al., 2023b). (Sec. 1)
  - [ReLU Strikes Back: Exploiting Activation Sparsity in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/6cf669c222ad13f60d503736fb2bd15b-Paper-Conference.pdf)
- **Speculative decoding** (behaviors tasks) — *causes*
  > Speculative decoding (SD)... has shown great power for LLM inference acceleration.
  - [PEARL: Parallel Speculative Decoding with Adaptive Draft Length](https://proceedings.iclr.cc/paper_files/paper/2025/file/03b1043052700b1a471996b0baf309d4-Paper-Conference.pdf)
- **Scalability** (constructs) — *causes*
  > "Ferret significantly enhances the scalability of existing federated full-parameter tuning approaches by achieving high computational efficiency, reduced communication overhead, and fast convergence"
  - [Ferret: Federated Full-Parameter Tuning at Scale for Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shu25a/shu25a.pdf)
- **Token sparsity** (constructs) — *causes*
  > "Token sparsity mitigates inefficiencies in token usage"
  - [CoreMatching: A Co-adaptive Sparse Inference Framework with Token and Neuron Pruning for Comprehensive Acceleration of Vision-Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25eb/wang25eb.pdf)

### Associated with
- **Utility preservation** (constructs)
  > Thus, a critical challenge remains: how to effectively reduce inference computation without sacrificing model performance? (Section 1)
  - [Masks Can be Learned as an Alternative to Experts](https://aclanthology.org/2025.acl-long.768.pdf)
