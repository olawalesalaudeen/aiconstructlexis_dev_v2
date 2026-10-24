# LIMA
**Type:** Measurement  
**Referenced in:** 7 papers  

## State of the Field

**What it is.** Across papers, LIMA is described as a natural language dataset organized around instruction-response pairs. Papers portray it in two main ways: as a non-code dataset used to study memorization and test whether findings generalize beyond code, and as an instruction fine-tuning dataset with curated prompts and responses designed to teach specific instructional formats. One paper further characterizes its training split as 1,030 diverse instruction-response pairs covering a wide range of downstream scenarios.

**What it is claimed to measure.** Papers use LIMA to measure three constructs and one behavioral indicator. The linked constructs are General ability, Instruction following ability, and Memorization, and the linked behavioral indicator is Text generation. These claims are spread across several targets rather than centered on one recurring construct: one paper computes language-model loss on the training split of LIMA for General ability, another studies memorization on LIMA, another uses LIMA to investigate instruction-following capabilities, and one paper reports Text generation as measured by an evaluation described as similar to the evaluation process in LIMA.

**Space of uses.** Papers use LIMA in several ways. It appears as a dataset for computing downstream loss on a training split, as a dataset for additional instruction fine-tuning, and as a reference point for an open-ended generation evaluation described as similar to LIMA; a separate study uses it alongside Anthropic HH when examining RLHF memorization on natural language datasets. No measurement instrument is linked to it directly.

## Sources

**[Measuring memorization in RLHF for code completion](https://proceedings.iclr.cc/paper_files/paper/2025/file/22811d2089d4aa0ba66e52a5e47efb65-Paper-Conference.pdf)**
> A natural language dataset used to study memorization in a non-code domain to test the generalizability of findings.

## Relationships

### → LIMA
- **Memorization** (constructs) — *measured_by*
  > Finally, we explore RLHF memorization on different task domains by studying memorization on natural language datasets, LIMA (Zhou et al., 2024) and Anthropic HH (Bai et al., 2022). (Section 5.5)
  - [Measuring memorization in RLHF for code completion](https://proceedings.iclr.cc/paper_files/paper/2025/file/22811d2089d4aa0ba66e52a5e47efb65-Paper-Conference.pdf)
