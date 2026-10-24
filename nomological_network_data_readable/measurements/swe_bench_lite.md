# SWE-bench Lite
**Type:** Measurement  
**Referenced in:** 14 papers  
**Also known as:** SWE-Bench Lite, SWE-Bench-Lite  

## State of the Field

**What it is.** Across papers, the prevailing usage treats SWE-bench Lite as the lite, commonly used subset of SWE-bench for evaluating autonomous or automated software engineering. Most descriptions present it as a repository-level benchmark or evaluation suite built from real GitHub issues, codebases, and code patches, usually as 300 issues or task instances sampled from the full benchmark. A recurring framing is that it offers a more self-contained evaluation of functional bug fixes, sometimes with hidden unit tests; papers differ in detail, with one description referring to 11 Python repositories and another to 12 real-world software projects.

**What it is claimed to measure.** Papers link it to three behavioral indicators and no constructs. The linked measurement claims are most often for software issue resolution, followed by code debugging and GitHub issue resolution, and papers report outcomes such as issue resolution rate on SWE-bench Lite. All linked measurement claims in these papers are behavioral indicators rather than constructs.

**Space of uses.** Among linked instruments, papers connect it only to SWE-bench, describing SWE-bench Lite as a 300-instance subset or lite version of the full benchmark. Across papers it is commonly the benchmark on which experiments are conducted, and one paper says it was selected under budget constraints to compare systems on the same issues' resolution. Papers also position it as a more self-contained option for evaluating functional bug fixes.

## Sources

**[SWE-bench Multimodal: Do AI Systems Generalize to Visual Software Domains?](https://proceedings.iclr.cc/paper_files/paper/2025/file/07d6332ae36730707fddddba736d7b6c-Paper-Conference.pdf)**
> The most commonly used subset of the SWE-bench benchmark for evaluating state-of-the-art performance in autonomous software engineering systems.

**[CoRNStack: High-Quality Contrastive Data for Better Code Retrieval and Reranking](https://proceedings.iclr.cc/paper_files/paper/2025/file/285b0e63256699c04dbf2c8d4163fba4-Paper-Conference.pdf) (as "SWE-Bench-Lite")**
> SWE-Bench-Lite, an evaluation suite for repository-level software engineering tasks involving real GitHub issues and code patches.

**[Diversity Empowers Intelligence: Integrating Expertise of Software Engineering Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/d7b50b8ac2c781a12f26155f48310d8d-Paper-Conference.pdf) (as "SWE-Bench Lite")**
> SWE-Bench Lite, a 300-instance benchmark of real GitHub issue resolution with hidden unit tests for evaluating functional bug fixes.

## Relationships

### → SWE-bench Lite
- **Software issue resolution** (behaviors tasks) — *measured_by*
  > We conduct our experiments on SWE-Bench Lite, a 300-instance subset sampled from the full SWE-Bench for providing a more self-contained evaluation of functional bug fixes (Jimenez et al., 2024).
  - [Diversity Empowers Intelligence: Integrating Expertise of Software Engineering Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/d7b50b8ac2c781a12f26155f48310d8d-Paper-Conference.pdf)
- **GitHub issue resolution** (behaviors tasks) — *measured_by*
  > Considering budget constraints, we conducted experiments on SWE-bench lite to compare with them on the same issues’ resolution. (Appendix D)
  - [MAGIS: LLM-Based Multi-Agent Framework for GitHub Issue Resolution](https://proceedings.neurips.cc/paper_files/paper/2024/file/5d1f02132ef51602adf07000ca5b6138-Paper-Conference.pdf)

### Associated with
- **SWE-bench** (measurements)
  > We conduct our experiments on SWE-Bench Lite, a 300-instance subset sampled from the full SWE-Bench for providing a more self-contained evaluation of functional bug fixes (Jimenez et al., 2024).
  - [Diversity Empowers Intelligence: Integrating Expertise of Software Engineering Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/d7b50b8ac2c781a12f26155f48310d8d-Paper-Conference.pdf)
