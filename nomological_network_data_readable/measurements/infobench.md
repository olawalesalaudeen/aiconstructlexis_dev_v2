# InfoBench
**Type:** Measurement  
**Referenced in:** 6 papers  

## State of the Field

**What it is.** Across papers, the prevailing framing is an instruction-following or instruction-adherence benchmark that decomposes complex instructions into simpler sub-instructions for granular evaluation. One description says it introduces the Decomposed Requirements Following Ratio and contains 500 diverse instructions with 2,250 decomposed questions across multiple constraint categories. A smaller line of work describes it as a direct-scoring dataset with a Likert scale from 1 to 5, Easy and Hard English subsets, and expert annotations across 50 tasks, while another paper uses an Expert split for classification. Some authors also place it among benchmarks for more general instructions that need LLM-based judgment.

**What it is claimed to measure.** Papers most commonly use InfoBench to measure Instruction following: it is linked to one behavioral indicator, and descriptions say it assesses instruction-adherence capabilities and evaluates a model’s ability to comprehend and execute detailed directives. Its construct links are narrower, with two constructs recorded, Instruction following ability and Generalization. Overall, the measurement claims are centered on instruction following, with a smaller line of work also using it to measure Instruction following ability and Generalization.

**Space of uses.** In use, papers often position InfoBench alongside other instruction-following evaluations, especially IFEval and Multi-IF, and one paper further uses it with MT-Bench and Arena-hard for cross-domain validation. The dominant role is as an instruction-following benchmark, though some papers use it more specifically for direct scoring of LLM responses or for classification through the Expert split. Several descriptions also frame it as covering real-world or general instructions that require step-by-step guidance or LLM-based judgment, and no measurement instrument is linked to it through a direct relationship claim.

## Sources

**[MIA-Bench: Towards Better Instruction Following Evaluation of Multimodal LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/571082ea18d30060177dfcaf662ff0e5-Paper-Conference.pdf)**
> A benchmark for instruction adherence that decomposes complex instructions into simpler sub-instructions for granular evaluation.

## Relationships

### → InfoBench
- **Instruction following** (behaviors tasks) — *measured_by*
  > InfoBench (Qin et al., 2024) introduces a new metric called Decomposed Requirements Following Ratio (DRFR) for assessing the instruction-adherence capabilities of LLMs.
  - [MIA-Bench: Towards Better Instruction Following Evaluation of Multimodal LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/571082ea18d30060177dfcaf662ff0e5-Paper-Conference.pdf)
- **Instruction following ability** (constructs) — *measured_by*
  > To explore AUTOIF on more natural Instruction-following scenario, we further introduce the complex instruction-following dataset InfoBench(Qin et al., 2024b), the general natural instruction evaluation set MT-Bench (Zheng et al., 2023) and the real-world chatbot evaluation set Arena-hard (Zheng et al., 2023) as cross domain validation. (Section 4).
  - [Self-play with Execution Feedback: Improving Instruction-following Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/62203a74e233e933b160711e791e1a02-Paper-Conference.pdf)
- **Cross-domain generalization** (constructs) — *measured_by*
  > "we further introduce the complex instruction-following dataset InfoBench(Qin et al., 2024b), the general natural instruction evaluation set MT-Bench (Zheng et al., 2023) and the real-world chatbot evaluation set Arena-hard (Zheng et al., 2023) as cross domain validation."
  - [Self-play with Execution Feedback: Improving Instruction-following Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/62203a74e233e933b160711e791e1a02-Paper-Conference.pdf)
