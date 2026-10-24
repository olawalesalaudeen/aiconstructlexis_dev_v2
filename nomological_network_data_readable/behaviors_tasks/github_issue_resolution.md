# GitHub issue resolution
**Type:** Behavior  
**Referenced in:** 5 papers  

## State of the Field

**Space of definitions.** Across the available descriptions, the prevailing usage treats it as an end-to-end repository task: understanding a problem description from a GitHub issue and generating a code patch that successfully resolves it within the software repository. The success criterion is resolution of the issue through the produced patch, and no alternative task formulation appears in the available definitions.

**Variants.** The available snippets place the task at the repository level, with one paper noting difficulties in resolving GitHub issues particularly at that level. Benchmark descriptions also frame the behavior as patch-level fixing rather than broader development capabilities. No additional named sub-tasks, domains, or modalities appear in the cited papers.

**Space of elicitation and scores.** Papers describe it as measured by 2 instruments, most often SWE-bench and also SWE-bench Lite. SWE-bench is presented as an evaluation benchmark or dataset specifically designed for evaluating GitHub issue resolution, and one description says it emphasizes patch-level fixes rather than broader development capabilities. SWE-bench Lite is used to compare systems on the same issues' resolution under budget constraints.

**What it is taken as evidence of.** The papers cited here do not link it to any construct, so they do not explicitly state what construct it is evidence of.

## Sources

**[MAGIS: LLM-Based Multi-Agent Framework for GitHub Issue Resolution](https://proceedings.neurips.cc/paper_files/paper/2024/file/5d1f02132ef51602adf07000ca5b6138-Paper-Conference.pdf)**
> The end-to-end task of understanding a problem description from a GitHub issue and generating a code patch that successfully resolves it within a software repository.

## Relationships

### GitHub issue resolution →
- **SWE-bench** (measurements) — *measured_by*
  > In the experiments, we employ the SWE-bench dataset as the evaluation benchmark because it is the latest dataset specifically designed for evaluating the performance of the GitHub issue resolution. (Section 4.1)
  - [MAGIS: LLM-Based Multi-Agent Framework for GitHub Issue Resolution](https://proceedings.neurips.cc/paper_files/paper/2024/file/5d1f02132ef51602adf07000ca5b6138-Paper-Conference.pdf)
- **SWE-bench Lite** (measurements) — *measured_by*
  > Considering budget constraints, we conducted experiments on SWE-bench lite to compare with them on the same issues’ resolution. (Appendix D)
  - [MAGIS: LLM-Based Multi-Agent Framework for GitHub Issue Resolution](https://proceedings.neurips.cc/paper_files/paper/2024/file/5d1f02132ef51602adf07000ca5b6138-Paper-Conference.pdf)
