# MultiPL-E
**Type:** Measurement  
**Referenced in:** 15 papers  
**Also known as:** Multipl-E, MULTIPL-E  

## State of the Field

**What it is.** Across the papers, the prevailing usage treats MultiPL-E as a multilingual code generation benchmark formed by translating HumanEval, and often MBPP, into multiple programming languages. Several definitions describe parallel datasets in 18 programming languages, sometimes as translations of two unit-test driven Python benchmarks to 18 other languages; as one paper puts it, it is "translated from the Python benchmark ... into parallel datasets in 18 programming languages" (Knowledge Fusion of Large Language Models). Some authors also call it a multi-language parallel benchmark for text-to-code generation, and papers report evaluations on subsets such as 8 languages, 5 languages, or cpp/go. A smaller line of work describes it more narrowly as translated HumanEval problems, while one paper instead describes a Bash-focused benchmark with 540 scripting tasks checked by unit tests.

**What it is claimed to measure.** Papers link MultiPL-E to 2 behavioral indicators and no constructs. The dominant claim is that papers use it to measure code generation, with evaluations reported on MultiPL-E using metrics such as pass@1, pass@k, Avg. Pass@(1+10), and pass@100. A smaller line uses it to measure code completion, with one paper reporting multilingual code completion averages on Multipl-E. In these papers, the measurement claims stay at the level of behavioral indicators rather than named constructs.

**Space of uses.** Papers frequently include MultiPL-E in benchmark suites, most commonly alongside HumanEval and sometimes with MBPP, HumanEval+, and DS-1000. Papers report 1 inter-instrument link, to HumanEval, as related; one paper states that MultiPL-E "extends HumanEval and MBPP ... to support 18 programming languages." They also position it as the multilingual slice of evaluation, reporting results on selected language subsets such as cpp/go, five-language setups, or Bash tasks.

## Sources

**[Batched Low-Rank Adaptation of Foundation Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/66247b78cb1aa7259dcf856a18c9e294-Paper-Conference.pdf)**
> MultiPL-E is a benchmark for evaluating multilingual code generation by translating the HumanEval and MBPP benchmarks into many programming languages.

**[ObscuraCoder: Powering Efficient Code LM Pre-Training Via Obfuscation Grounding](https://proceedings.iclr.cc/paper_files/paper/2025/file/23ff02034404b65776080cbf7148addd-Paper-Conference.pdf) (as "Multipl-E")**
> A benchmark for evaluating the multilingual code generation capabilities of models by translating HumanEval problems into multiple programming languages.

**[Monet: Mixture of Monosemantic Experts for Transformers](https://proceedings.iclr.cc/paper_files/paper/2025/file/382c35d1a57c07055dfcba58dd39e012-Paper-Conference.pdf) (as "MULTIPL-E")**
> A benchmark used to evaluate programming language masking and pass@100 metric changes across languages.

## Relationships

### → MultiPL-E
- **Code generation** (behaviors tasks) — *measured_by*
  > The evaluation of FLORA, LORA, and IA3 was conducted on the MultiPL-E benchmark (Cassano et al., 2023), which contains the translation of two unit-test driven Python benchmarks (HumanEval and MBPP) to 18 other programming languages. (Section 4.2)
  - [Batched Low-Rank Adaptation of Foundation Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/66247b78cb1aa7259dcf856a18c9e294-Paper-Conference.pdf)
- **Code completion** (behaviors tasks) — *measured_by*
  > comparing multilingual code completion averages on Multipl-E (Cassano et al., 2023)
  - [ObscuraCoder: Powering Efficient Code LM Pre-Training Via Obfuscation Grounding](https://proceedings.iclr.cc/paper_files/paper/2025/file/23ff02034404b65776080cbf7148addd-Paper-Conference.pdf)

### Associated with
- **HumanEval** (measurements)
  > It extends HumanEval and MBPP (Austin et al., 2021) to support 18 programming languages.
  - [SolEval: Benchmarking Large Language Models for Repository-level Solidity Smart Contract Generation](https://aclanthology.org/2025.emnlp-main.218.pdf)
