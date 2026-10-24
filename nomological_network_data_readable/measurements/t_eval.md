# T-Eval
**Type:** Measurement  
**Referenced in:** 5 papers  

## State of the Field

**What it is.** Across the cited definitions, T-Eval is most commonly described as an out-of-distribution benchmark for LLM tool use and API utilization, especially multi-step decision-making. Papers variously call it an OOD benchmark, an out-of-distribution task planning dataset, and a benchmark "for tool use," with the fuller description emphasizing evaluation of LLMs' capability to utilize APIs across multi-step decisions.

**What it is claimed to measure.** Papers link T-Eval to 2 constructs and 2 behavioral indicators. The most frequently linked constructs are Planning and Reasoning, and the most frequently linked behavioral indicators are Action execution and Instruction following; one paper also states that it "assesses six core competencies: planning, reasoning, retrieval, understanding, instruction following, and reviewing" (Can Compressed LLMs Truly Act? An Empirical Evaluation of Agentic Capabilities in LLM Compression), so papers report it as measuring several capabilities rather than a single one.

**Space of uses.** In use, papers position T-Eval mainly as an out-of-distribution evaluation for generalization and agentic tool use. WorkflowLLM: Enhancing Workflow Orchestration Capability of Large Language Models says it is used to "further evaluate the generalization capability" of a model, and another paper groups it with ToolBench and ToolAlpaca under Action Execution tasks. No measurement instrument is linked to it directly.

## Sources

**[WorkflowLLM: Enhancing Workflow Orchestration Capability of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/3d7259031023c5aa463187c4a31c95c8-Paper-Conference.pdf)**
> An out-of-distribution benchmark designed to evaluate the multi-step decision-making and API utilization capabilities of LLMs.

## Relationships

### → T-Eval
- **Planning** (constructs) — *measured_by*
  > We utilize T-Eval (Chen et al., 2023c), which assesses six core competencies: planning, reasoning, retrieval, understanding, instruction following, and reviewing. (Sec. 4.1)
  - [Can Compressed LLMs Truly Act? An Empirical Evaluation of Agentic Capabilities in LLM Compression](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dong25k/dong25k.pdf)
- **Action execution** (behaviors tasks) — *measured_by*
  > We categorize the agentic tasks into three types: (1) Action Execution: T-Eval (Chen et al., 2023c), ToolBench (Qin et al., 2023a), and ToolAlpaca (Tang et al., 2023b) (Sec. 2.2)
  - [Can Compressed LLMs Truly Act? An Empirical Evaluation of Agentic Capabilities in LLM Compression](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dong25k/dong25k.pdf)
- **Reasoning** (constructs) — *measured_by*
  > We utilize T-Eval (Chen et al., 2023c), which assesses six core competencies: planning, reasoning, retrieval, understanding, instruction following, and reviewing. (Sec. 4.1)
  - [Can Compressed LLMs Truly Act? An Empirical Evaluation of Agentic Capabilities in LLM Compression](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dong25k/dong25k.pdf)
- **Instruction following** (behaviors tasks) — *measured_by*
  > We utilize T-Eval (Chen et al., 2023c), which assesses six core competencies: planning, reasoning, retrieval, understanding, instruction following, and reviewing. (Sec. 4.1)
  - [Can Compressed LLMs Truly Act? An Empirical Evaluation of Agentic Capabilities in LLM Compression](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dong25k/dong25k.pdf)
- **Decision-making** (constructs) — *measured_by*
  > “we conduct experiments using an OOD benchmark, T-Eval, a widely-used benchmark to evaluate the multi-step decision-making capability of LLMs to utilize APIs.”
  - [WorkflowLLM: Enhancing Workflow Orchestration Capability of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/3d7259031023c5aa463187c4a31c95c8-Paper-Conference.pdf)
