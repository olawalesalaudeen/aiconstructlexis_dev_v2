# Multi-digit multiplication
**Type:** Behavior  
**Referenced in:** 8 papers  
**Also known as:** Integer multiplication, MUL  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats this as an arithmetic generation task: multiplying two multi-digit integers, usually in base 10, and outputting the resulting number. Most definitions converge on the product itself as the required output, while some make the success criterion explicit as producing the correct result or an exact-match answer; one paper describes the MUL task as involving "multiplying two multi-digit numbers in base 10" (Limits of Transformer Language Models on Learning to Compose Algorithms).

**Variants.** Papers use both "multi-digit multiplication" and "integer multiplication" for the task. The studied settings include fixed operand-length cases such as 4-by-3-digit, 4 x 4, and 5 x 5 problems, as well as variants where both multiplier and multiplicand can vary in length and the focus is on generalization over both operand lengths; one paper also says it considers the task from BIG-bench.

**Space of elicitation and scores.** None of the papers link it to a measurement instrument. When papers report scoring, they use outcome-based metrics such as accuracy and exact match accuracy, including reports of 27% accuracy on 4-by-3-digit multiplication and 99.5% exact match accuracy on a 5 x 5 task.

**What it is taken as evidence of.** None of the papers link this behavior to a construct.

## Sources

**[Limits of Transformer Language Models on Learning to Compose Algorithms](https://proceedings.neurips.cc/paper_files/paper/2024/file/0e797d5139ad94fc2dc2080c09119f29-Paper-Conference.pdf)**
> Multiplying two multi-digit numbers in base 10 as an explicit output-producing task.

**[Seq-VCR: Preventing  Collapse in Intermediate Transformer Representations for Enhanced Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/b577c062bd4f894b7e05fab6440373ed-Paper-Conference.pdf) (as "Integer multiplication")**
> The task of calculating the product of two multi-digit integers and generating the correct numerical result.

**[Limits of Transformer Language Models on Learning to Compose Algorithms](https://proceedings.neurips.cc/paper_files/paper/2024/file/0e797d5139ad94fc2dc2080c09119f29-Paper-Conference.pdf) (as "MUL")**
> Multiplication, a benchmark involving multiplication of two multi-digit base-10 numbers.

## Relationships

### Multi-digit multiplication →
- **BIG-bench** (measurements) — *measured_by*
  > "we first consider the multi-digit multiplication task from the BIG-bench benchmark"
  - [Seq-VCR: Preventing  Collapse in Intermediate Transformer Representations for Enhanced Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/b577c062bd4f894b7e05fab6440373ed-Paper-Conference.pdf)
