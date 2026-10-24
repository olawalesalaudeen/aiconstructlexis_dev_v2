# BFCL
**Type:** Measurement  
**Referenced in:** 13 papers  
**Also known as:** Berkeley Function-Calling Benchmark  

## State of the Field

**What it is.** Across papers, BFCL is most commonly described as a comprehensive benchmark or leaderboard for evaluating LLM function calling and tool use, often framed as executable function-call evaluation. Most definitions describe categories such as single-turn, multi-turn, hallucination, and executable function calling; other papers recast these as Non-live, Live, Multi-turn, and Hallucination, or emphasize simple, multiple, and parallel function calls with AST accuracy, execution, and relevance detection. Some authors also describe it as covering multiple programming languages, application domains, and real-world APIs, and papers refer to versioned releases and to the live&simple category.

**What it is claimed to measure.** Papers link BFCL to 2 constructs and 2 behavioral indicators. The measurement claims concentrate on Tool use and Tool use ability, with BFCL described as assessing whether models can call functions or tools accurately; additional papers use its Hallucination category to measure Hallucination and its multi-turn portion to measure Context retention. A separate paper also relates BFCL to Tool use ability by discussing its focus on tool-calling accuracy.

**Space of uses.** Papers usually use BFCL as a benchmark or leaderboard for reporting tool-use or function-calling results. Some studies use it alongside APIBank, while others draw on datasets from BFCL together with T-Eval, adapt test cases from its live&simple category, or use it to evaluate model helpfulness on benign tasks. No measurement instrument is directly linked to it.

**Concerns raised.** One paper raises a scope concern, saying that benchmarks including BFCL mainly test whether the correct tool is called with the correct parameters when the tool is already provided and the user supplies enough information, and pay less attention to evaluating when models should or should not call tools.

## Sources

**[ToolACE: Winning the Points of LLM Function Calling](https://proceedings.iclr.cc/paper_files/paper/2025/file/663865ea167425c6c562cb0b6bcf76c7-Paper-Conference.pdf)**
> BFCL (Benchmark for Function Calling) is a benchmark used to evaluate LLM function-calling performance across single-turn, multi-turn, hallucination, and executable categories.

**[xLAM: A Family of Large Action Models to Empower AI Agent Systems](https://aclanthology.org/2025.naacl-long.578.pdf) (as "Berkeley Function-Calling Benchmark")**
> Extensive benchmark assessing function-calling capabilities across programming languages and application domains, including simple, multiple, and parallel function calls, with evaluation via AST accuracy, execution, and relevance detection.

## Relationships

### → BFCL
- **Tool use** (behaviors tasks) — *measured_by*
  > function calling (BFCL)
  - [Compact Language Models via Pruning and Knowledge Distillation](https://proceedings.neurips.cc/paper_files/paper/2024/file/4822991365c962105b1b95b1107d30e5-Paper-Conference.pdf)
- **Tool use ability** (constructs) — *measured_by*
  > Experiments are conducted on two representative benchmarks, including BFCL Yan et al. (2024) and API-Bank Li et al. (2023). The two benchmarks are comprehensive and executable function call evaluations specifically designed to assess the ability of LLMs to invoke functions.
  - [ToolACE: Winning the Points of LLM Function Calling](https://proceedings.iclr.cc/paper_files/paper/2025/file/663865ea167425c6c562cb0b6bcf76c7-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks) — *measured_by*
  > Accuracy performance comparison on BFCL-v3 leaderboard (updated on 09/20/2024). ... Hallucination (Table 2)
  - [ToolACE: Winning the Points of LLM Function Calling](https://proceedings.iclr.cc/paper_files/paper/2025/file/663865ea167425c6c562cb0b6bcf76c7-Paper-Conference.pdf)
