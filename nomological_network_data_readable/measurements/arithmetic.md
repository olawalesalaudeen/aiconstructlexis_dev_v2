# Arithmetic
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Across the papers, the prevailing description is an arithmetic evaluation task or dataset, though its format varies across uses. One recurring framing uses natural-language addition and subtraction questions involving at most 5-digit numbers. Other papers describe Arithmetic as mathematical expressions built from six unique two-digit numbers with addition, multiplication, and subtraction, or as a set of 1,000 generated problems of the form a + b · c + d − e · f.

**What it is claimed to measure.** The papers attach several measurement claims to Arithmetic rather than one shared linked construct. Definitions describe it as assessing generator-validator consistency through correctness randomization, and as evaluating arithmetic reasoning or basic mathematical reasoning. No construct or behavioral indicator is explicitly linked to it in the recorded relationships.

**Space of uses.** Papers use Arithmetic in different evaluation setups. One use asks a generator to produce either a correct or an incorrect response and then has a validator check that response, instantiating generator-validator consistency through randomized correctness. Another paper positions it as one of several datasets in a broader multi-domain evaluation, and another uses it as a standalone set of generated arithmetic problems; no other measurement instrument is explicitly linked to it.

## Sources

**[Benchmarking and Improving Generator-Validator Consistency of Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/bfcb583d225b1db8d3ca2331f6785774-Paper-Conference.pdf)**
> Benchmark task involving natural language arithmetic questions (addition and subtraction of up to 5-digit numbers) used to assess generator-validator consistency via correctness randomization.

## Relationships

### → Arithmetic
- **Mathematical reasoning** (constructs) — *measured_by*
  > Arithmetic (Brown et al., 2020): a datasets evaluates the model’s fundamental mathematical reasoning abilities. (Section 4.1)
  - [S2-MAD: Breaking the Token Barrier to Enhance Multi-Agent Debate Efficiency](https://aclanthology.org/2025.naacl-long.475.pdf)
