# SUPERB
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** The available descriptions treat SUPERB as a benchmark for spoken language understanding, with the prevailing characterization emphasizing coarse-grained semantic understanding tasks. One paper further describes it as the first benchmark specifically designed for spoken language.

**What it is claimed to measure.** Papers use SUPERB to measure speech understanding, and the reported measurement claims converge on that single construct rather than spreading across several constructs. It is also linked to one behavioral indicator, speech recognition, but that connection is described as a related use rather than as a direct measurement claim.

**Space of uses.** The available relationships do not link SUPERB directly to any other measurement instrument. In one use, a paper evaluates ASR with TED-LIUMv3, intent classification with SLURP, and speaker ID with VoxCeleb1, while stating that these evaluations follow the SUPERB configuration.

**Concerns raised.** A concern raised in the available discussion is that SUPERB primarily focuses on coarse-grained semantic understanding tasks and, in that account, overlooks various acoustic features.

## Sources

**[VoxDialogue: Can Spoken Dialogue Systems Understand Information Beyond Words?](https://proceedings.iclr.cc/paper_files/paper/2025/file/011df158529ddceb5f2f7a65f2732a5a-Paper-Conference.pdf)**
> A benchmark designed for spoken language understanding, which primarily focuses on coarse-grained semantic understanding tasks.

## Relationships

### → SUPERB
- **Speech understanding** (constructs) — *measured_by*
  > SUPERB (Yang et al., 2021) focuses on speech understanding... (Section 5.1)
  - [Recent Advances in Speech Language Models: A Survey](https://aclanthology.org/2025.acl-long.682.pdf)

### Associated with
- **Speech recognition** (behaviors tasks)
  > We evaluate them on three common speech tasks with corresponding common benchmarks: ASR with TED-LIUMv3 (Hernandez et al., 2018), intent classification, a standard SLU task, with SLURP (Bastianelli et al., 2020), along with speaker ID with VoxCeleb1 (Nagrani et al., 2020), following the SUPERB configuration (Yang et al., 2021) (Section 4.4).
  - [Joint Fine-tuning and Conversion of Pretrained Speech and Language Models towards Linear Complexity](https://proceedings.iclr.cc/paper_files/paper/2025/file/9b79416c0dc4b09feaa169ed5cdd63d4-Paper-Conference.pdf)
