# Code completion
**Type:** Behavior  
**Referenced in:** 30 papers  
**Also known as:** Data science code completion, Fill-in-the-middle code completion, Verilog code completion, Fill in the blank, Next-line prediction, Code auto-completion, Repository-level code completion, Next-line code prediction  

## State of the Field

**Space of definitions.** Most definitions describe code completion as continuing partially written code from a supplied context, often with the expectation of syntactically and functionally correct output. Depending on the paper, the required continuation may be the next segment, the next line or token, or a missing span inside the snippet. The provided context also varies: some papers use preceding code alone, while others add comments, documentation, function signatures and docstrings, or broader repository context.

**Variants.** A smaller line of work names more specific settings, including repository-level code completion, next-line code prediction, fill-in-the-middle code completion, data science code completion, and Verilog code completion. Other papers describe blank-filling and auto-completion formulations, and one paper casts a structured generation problem as Python code completion by asking the model to add relation edges to a script.

**Space of elicitation and scores.** Papers measure this behavior with 11 instruments. LongBench is the most common, usually as a code completion category inside a broader long-context benchmark; HumanEval and RepoBench-P also recur, framing it respectively as programming problems and next-line generation over a long code base. Chatbot Arena and CrossCodeEval are also linked, and the overall instrument mix ranges from broad multitask evaluations to repository-level and cross-file settings.

**What it is taken as evidence of.** Papers link code completion to 2 constructs, without a single prevailing interpretation. One paper reports that it is related to long-context understanding, citing repository-level code completion among long-context tasks, while another claims a causal relationship from code completion to reasoning, stating that formulating prompts as code can enhance reasoning abilities.

## Sources

**[CLEX: Continuous  Length Extrapolation for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/3df38ca67befaed9c03b95ffee07d9f8-Paper-Conference.pdf)**
> Generating syntactically and functionally correct code continuations from partial code inputs, particularly under long-context conditions.

**[AlchemistCoder: Harmonizing and Eliciting Code Capability by Hindsight Tuning on Multi-source Data](https://proceedings.neurips.cc/paper_files/paper/2024/file/040c816286b3844fd78f2124eec75f2e-Paper-Conference.pdf) (as "Data science code completion")**
> The task of completing code snippets that use popular data science libraries like Pandas, NumPy, and PyTorch.

**[Exact Byte-Level Probabilities from Tokenized Language Models for FIM-Tasks and Model Ensembles](https://proceedings.iclr.cc/paper_files/paper/2025/file/5ed5c3c846f684a54975ad7a2525199f-Paper-Conference.pdf) (as "Fill-in-the-middle code completion")**
> The task of generating a missing segment of code given the preceding (prefix) and succeeding (suffix) code context.

**[CraftRTL: High-quality Synthetic Data Generation for Verilog Code Models with Correct-by-Construction Non-Textual Representations and Targeted Code Repair](https://proceedings.iclr.cc/paper_files/paper/2025/file/e112a4671e8779aa9f640a0e3f81bd26-Paper-Conference.pdf) (as "Verilog code completion")**
> The task of completing a partial Verilog code snippet based on the provided context and problem description.

**[CodeMMLU: A Multi-Task Benchmark for Assessing Code Understanding & Reasoning Capabilities of CodeLLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/078b4435f5b61a092025fec713084008-Paper-Conference.pdf) (as "Fill in the blank")**
> The task of completing missing parts of a code snippet given documentation and context.

**[Let the Code LLM Edit Itself When You Edit the Code](https://proceedings.iclr.cc/paper_files/paper/2025/file/9530635032b95cea9585bd800d308300-Paper-Conference.pdf) (as "Next-line prediction")**
> Given code context, the model predicts the next line or next token to complete the snippet.

**[PALMBENCH: A COMPREHENSIVE BENCHMARK OF COMPRESSED LARGE LANGUAGE MODELS ON MOBILE PLATFORMS](https://proceedings.iclr.cc/paper_files/paper/2025/file/a647405740b28a61311ac9cff28772e5-Paper-Conference.pdf) (as "Code auto-completion")**
> The task of predicting and generating the next segment of code based on the current context.

**[LV-XAttn: Distributed Cross-Attention for Long Visual Inputs in Multimodal Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chang25c/chang25c.pdf) (as "Repository-level code completion")**
> The task of generating code completions based on the context of an entire software repository.

**[RepoBench: Benchmarking Repository-Level Code Auto-Completion Systems](https://proceedings.iclr.cc/paper_files/paper/2024/file/d191ba4c8923ed8fd8935b7c98658b5f-Paper-Conference.pdf) (as "Next-line code prediction")**
> The observable behavior of generating the next line of code in a file based on both in-file context (preceding lines and imports) and cross-file context (retrieved snippets from other files).

## Relationships

### Code completion →
- **LongBench** (measurements) — *measured_by*
  > Table 2: Results (%) on LongBench. ∗ indicates results reported by Bai et al. [2023]. CREAM-7B-32k is instruction-tuned for 100 steps using 4K length data on LLaMa2-7B-Chat. Model Single- Doc QA Multi- Doc QA Summari- zation Few-shot Learning Code Completion
  - [An Efficient Recipe for Long Context Extension via Middle-Focused Positional Encoding](https://proceedings.neurips.cc/paper_files/paper/2024/file/66944d3a3e77ebe366793f6a6126f3a4-Paper-Conference.pdf)
- **RepoBench-P** (measurements) — *measured_by*
  > We pick RepoBench-P [43] which is collected from GitHub repositories, and the model needs to generate the next line of code given the long code base (Section 4.1).
  - [Chain of Agents: Large Language Models Collaborating on Long-Context Tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/ee71a4b14ec26710b39ee6be113d7750-Paper-Conference.pdf)
- **HumanEval** (measurements) — *measured_by*
  > HumanEval [3] is a code completion benchmark consisting of programming problems assessing language comprehension, algorithms, and simple mathematics (Section 4.1).
  - [RouterDC: Query-Based Router by Dual Contrastive Learning for Assembling Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/7a641b8ec86162fc875fb9f6456a542f-Paper-Conference.pdf)
- **MBPP** (measurements) — *measured_by*
  > "a code-generation task that requires the model to complete method bodies from MBPP benchmark [1]"
  - [Prompt Tuning Strikes Back: Customizing Foundation Models with Low-Rank Prompt Adaptation](https://proceedings.neurips.cc/paper_files/paper/2024/file/548551c07a68c8f0a87d67c6167cedb1-Paper-Conference.pdf)
- **TRACE** (measurements) — *measured_by*
  > TRACE (Wang et al., 2023b) serves as a challenging continual instruction tuning benchmark comprising 8 diverse tasks, including domain-specific QA, code completion, mathematical reasoning (Section 2).
  - [Spurious Forgetting in Continual Learning of Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a774503daed55eb53c634847ae071ec7-Paper-Conference.pdf)
- **MultiPL-E** (measurements) — *measured_by*
  > comparing multilingual code completion averages on Multipl-E (Cassano et al., 2023)
  - [ObscuraCoder: Powering Efficient Code LM Pre-Training Via Obfuscation Grounding](https://proceedings.iclr.cc/paper_files/paper/2025/file/23ff02034404b65776080cbf7148addd-Paper-Conference.pdf)
- **RepoEval** (measurements) — *measured_by*
  > we also evaluate the effectiveness of HLP on repository-level code Fill-in-the-Middle in cross-file scenarios via CrossCodeEval (Ding et al., 2023), CrossCodeLongEval (Wu et al., 2024), and RepoEval (Zhang et al., 2023). (Section 4.2)
  - [Planning-Aware Code Infilling via Horizon-Length Prediction](https://aclanthology.org/2025.emnlp-main.1672.pdf)
- **CrossCodeEval** (measurements) — *measured_by*
  > we also evaluate the effectiveness of HLP on repository-level code Fill-in-the-Middle in cross-file scenarios via CrossCodeEval (Ding et al., 2023), CrossCodeLongEval (Wu et al., 2024), and RepoEval (Zhang et al., 2023). (Section 4.2)
  - [Planning-Aware Code Infilling via Horizon-Length Prediction](https://aclanthology.org/2025.emnlp-main.1672.pdf)

### Associated with
- **Long-context understanding** (constructs)
  > Large language models (LLMs) have advanced to support long-context tasks such as document understanding (Li et al., 2024a), multi-turn dialogues (Yi et al., 2024), repository-level code completion (Jimenez et al., 2024), and complex reasoning (Zhou et al., 2025).
  - [LeanK: Learnable K Cache Channel Pruning for Efficient Decoding](https://aclanthology.org/2025.emnlp-main.1584.pdf)
