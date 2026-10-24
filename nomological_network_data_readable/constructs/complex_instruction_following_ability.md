# Complex instruction following ability
**Type:** Construct  
**Referenced in:** 7 papers  
**Also known as:** Complex instruction following, Complex instruction understanding  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Rather than a single prevailing definition, papers use two close framings. One paper defines it as accurately interpreting and executing multi-step instructions while maintaining consistency across the full task, while another defines it as discerning and executing a user's core intent from long or convoluted instructions that may contain irrelevant information. The definitions agree on interpretation and execution, but differ on whether complexity is framed mainly as multi-step consistency or as recovering intent from distracting context.

**Space of facets.** Several evaluation papers treat complex instructions as instructions with multiple constraints or multiple-constraint composition. A smaller usage labels the construct complex instruction understanding and ties it to longer contexts whose relevant and irrelevant content obscures the instruction. One paper also presents it as one of several capabilities evaluated by a benchmark.

**Space of measurement.** Papers operationalize it through 6 measurement instruments and no linked behavioral indicators. The most frequently linked are CFBench, ComplexBench, FollowBench, IFEval, and MCBench. Operationally, these evaluations most often test instructions with multiple constraints or multiple-constraint composition, and MCBench adds multi-step prompts averaging over 5,000 characters that require consistency across the task; among the linked instruments, this matches the multi-step and constraint-based framing more directly than the long-context intent-recovery framing.

## Sources

**[Metric Calculating Benchmark: Code-Verifiable Complicate Instruction Following Benchmark for Large Language Models](https://aclanthology.org/2025.emnlp-main.1051.pdf) (as "Complex instruction following")**
> The ability to accurately interpret and execute multi-step instructions while maintaining consistency across the full task.

**[EmbodiedBench: Comprehensive Benchmarking Multi-modal Large Language Models for Vision-Driven Embodied Agents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25f/yang25f.pdf) (as "Complex instruction understanding")**
> The ability to discern and execute a user's core intent from long or convoluted language instructions that may contain irrelevant information.

## Relationships

### Complex instruction following ability →
- **CFBench** (measurements) — *measured_by*
  > We mainly perform evaluations on three complex instruction-following benchmarks: CFBench (Zhang et al., 2024b), FollowBench (Jiang et al., 2024b) and ComplexBench (Wen et al., 2024) (Section 4.1).
  - [MuSC: Improving Complex Instruction Following with Multi-granularity Self-Contrastive Training](https://aclanthology.org/2025.acl-long.523.pdf)
- **ComplexBench** (measurements) — *measured_by*
  > To this end, we propose ComplexBench, a benchmark for comprehensively evaluating the ability of LLMs to follow complex instructions composed of multiple constraints. (Abstract)
  - [Benchmarking Complex Instruction-Following with Multiple Constraints Composition](https://proceedings.neurips.cc/paper_files/paper/2024/file/f8c24b08b96a08ec7a7a975feea7777e-Paper-Datasets_and_Benchmarks_Track.pdf)
- **FollowBench** (measurements) — *measured_by*
  > We mainly perform evaluations on three complex instruction-following benchmarks: CFBench (Zhang et al., 2024b), FollowBench (Jiang et al., 2024b) and ComplexBench (Wen et al., 2024) (Section 4.1).
  - [MuSC: Improving Complex Instruction Following with Multi-granularity Self-Contrastive Training](https://aclanthology.org/2025.acl-long.523.pdf)
- **TRACE** (measurements) — *measured_by*
  > this paper introduces TRACE, a benchmark for improving and evaluating the complex instruction-following ability, which consists of 120K training data and 1K evaluation data. (Abstract)
  - [IOPO: Empowering LLMs with Complex Instruction Following via Input-Output Preference Optimization](https://aclanthology.org/2025.acl-long.1079.pdf)
- **MCBench** (measurements) — *measured_by*
  > MCBench evaluates three key capabilities of LLMs: • Complex Instruction Following: Each prompt in MCBench consists of multi-step instructions averaging over 5,000 characters in length.
  - [Metric Calculating Benchmark: Code-Verifiable Complicate Instruction Following Benchmark for Large Language Models](https://aclanthology.org/2025.emnlp-main.1051.pdf)
