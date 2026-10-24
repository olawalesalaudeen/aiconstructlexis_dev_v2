# TACO
**Type:** Measurement  
**Referenced in:** 5 papers  

## State of the Field

**What it is.** Across the papers, TACO is described as a competitive programming benchmark made up of problems sourced from CodeContests, APPS, and various programming contest platforms, and used to evaluate code generation. The prevailing description emphasizes difficulty stratification: one account says the test set is split into easy, medium, medium-hard, hard, and very-hard levels, while another reports using the easy and hard split; one paper also notes that it adopts a subset of TACO.

**What it is claimed to measure.** Papers use TACO to measure code generation. It is linked to one behavioral indicator, Code generation, and to no constructs, so the reported use centers on a single behavioral target rather than a broader set of constructs. The relationship evidence describes it as focused on algorithmic code generation and as a benchmark on which authors report code-generation performance.

**Space of uses.** No measurement instrument is linked to it. In the available papers, TACO is used in coding experiments either by adopting a subset of it for evaluation or by reporting performance on it as "another competitive programming benchmark," including results on easy and hard splits.

**Concerns raised.** One paper raises a contamination-related concern, stating that it "decontaminated the CodeContests training set against TACO eval set."

## Sources

**[What Makes Large Language Models Reason in (Multi-Turn) Code Generation?](https://proceedings.iclr.cc/paper_files/paper/2025/file/63fef0802863f47775c3563e18cbba17-Paper-Conference.pdf)**
> A competitive programming benchmark with difficulty-stratified problems used to evaluate code generation across easy to very-hard splits.

## Relationships

### → TACO
- **Code generation** (behaviors tasks) — *measured_by*
  > For the coding experiments, we adopt a subset of TACO, a dataset focused on algorithmic code generation with problems sourced from various programming contest platforms (Li et al., 2023). (Section 4.1)
  - [Learning How Hard to Think: Input-Adaptive Allocation of LM Computation](https://proceedings.iclr.cc/paper_files/paper/2025/file/ff414825df833edb8b1839e3d5d495e9-Paper-Conference.pdf)
