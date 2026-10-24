# BigCodeBench
**Type:** Measurement  
**Referenced in:** 22 papers  

## State of the Field

**What it is.** Across the papers, BigCodeBench is most commonly described as a code generation benchmark centered on completion or function completion tasks that require correct use of library APIs and multiple function calls. Definitions also portray it as a Python benchmark with execution-based evaluation over 1,140 fine-grained, rich-context, multi-tool-use tasks drawn from 139 libraries and 7 domains, while another paper describes 148 function completion problems requiring multiple Python libraries. Some papers further describe it as covering diverse problems from cryptography to data visualization, and a smaller usage mentions the BigCodeBench Leaderboard plus the BigCodeBench-Hard and BigCodeBench-full subsets.

**What it is claimed to measure.** Papers link BigCodeBench to 3 behavioral indicators and 1 construct. The prevailing use is to measure code generation, with papers describing it as a benchmark for code generation, a harness for running and evaluating LM-written code, and a dataset attached to the code generation task. A recurring secondary framing says it measures tool use and instruction following, especially in tasks that require using tools and following complex instructions, and one paper reports it as measuring compositional reasoning because tasks can require sequences of function calls from multiple libraries.

**Space of uses.** Papers usually position BigCodeBench as a standalone evaluation benchmark, and no measurement instrument is linked to it. Reported uses include zero-shot evaluation in the completion setting, use of the official evaluation libraries or evaluation harness to run and score generated code, reporting results on BigCodeBench-Hard and BigCodeBench-full, and drawing examples from the BigCodeBench Leaderboard. One paper also uses it as a comparison point for assessing alignment between a static benchmark and the Copilot Arena leaderboard.

## Sources

**[ObscuraCoder: Powering Efficient Code LM Pre-Training Via Obfuscation Grounding](https://proceedings.iclr.cc/paper_files/paper/2025/file/23ff02034404b65776080cbf7148addd-Paper-Conference.pdf)**
> A benchmark designed to evaluate a code model's ability to generate code that correctly utilizes various library APIs in a completion setting.

## Relationships

### → BigCodeBench
- **Code generation** (behaviors tasks) — *measured_by*
  > Our BigCodeBench focuses on evaluating the fundamental code generation capability of LLMs, which is also an essential path toward strong code agents. (Section 5)
  - [BigCodeBench: Benchmarking Code Generation with Diverse Function Calls and Complex Instructions](https://proceedings.iclr.cc/paper_files/paper/2025/file/a6a90bcc2aa470c3871b2d39a67d26e8-Paper-Conference.pdf)
- **Tool use** (behaviors tasks) — *measured_by*
  > We introduce BigCodeBench, a new high-quality programming benchmark constructed via the collaboration between human experts and LLMs, assessing the capability of tool use and complex instruction following. (Section 6)
  - [BigCodeBench: Benchmarking Code Generation with Diverse Function Calls and Complex Instructions](https://proceedings.iclr.cc/paper_files/paper/2025/file/a6a90bcc2aa470c3871b2d39a67d26e8-Paper-Conference.pdf)
- **Instruction following** (behaviors tasks) — *measured_by*
  > BigCodeBench (Zhuo et al., 2024) is a more challenging benchmark for code generation that evaluates models’ abilities to follow complex instructions... (Section 4.1)
  - [Selective Prompt Anchoring for Code Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tian25a/tian25a.pdf)
- **Compositional reasoning** (constructs) — *measured_by*
  > BigCodeBench frequently invokes a sequence of function calls from multiple libraries to solve a single task, requiring significant compositional reasoning ability for task-solving. (Section 3)
  - [BigCodeBench: Benchmarking Code Generation with Diverse Function Calls and Complex Instructions](https://proceedings.iclr.cc/paper_files/paper/2025/file/a6a90bcc2aa470c3871b2d39a67d26e8-Paper-Conference.pdf)
