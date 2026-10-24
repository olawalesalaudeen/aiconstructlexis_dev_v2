# LeetCode
**Type:** Measurement  
**Referenced in:** 3 papers  
**Also known as:** Leetcode  

## State of the Field

**What it is.** Across these papers, LeetCode is most commonly treated as a collection of programming problems from the LeetCode platform, either used directly as a coding benchmark or used as source material for derived tasks. One description uses approximately 2,000 coding problems, covering solutions in Python, Java, and C++, to build fill-in-the-blank items. A smaller framing treats Leetcode as a benchmark of recent problems scraped from the website, described as recent enough that models released before July 2023 would not have been trained on them.

**What it is claimed to measure.** Papers link LeetCode to two behavioral indicators and to no constructs. The recorded uses are to measure Code completion, through fill-in-the-blank tasks built from LeetCode problems, and Code generation, with LeetCode grouped with HumanEval for coding. The measurement claims therefore stay with these two behavioral indicators rather than any linked construct.

**Space of uses.** Papers position LeetCode in two main ways. In one use, it serves as an upstream source corpus inside a broader evaluation, where LeetCode problems are converted into fill-in-the-blank tasks. In another, it is used as a standalone coding benchmark alongside other instruments, most visibly HumanEval, and in one experiment set also MBPP, APPS, and CodeContests.

**Concerns raised.** One paper explicitly addresses prior training exposure, describing recent scraped Leetcode problems that ensure models released before July 2023 have not been trained on these data.

## Sources

**[CodeMMLU: A Multi-Task Benchmark for Assessing Code Understanding & Reasoning Capabilities of CodeLLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/078b4435f5b61a092025fec713084008-Paper-Conference.pdf)**
> A platform providing a collection of coding problems, used as a source for creating fill-in-the-blank tasks.

**[SFS: Smarter Code Space Search improves LLM Inference Scaling](https://proceedings.iclr.cc/paper_files/paper/2025/file/387982dbf23d9975c7fc45813dd3dabc-Paper-Conference.pdf) (as "Leetcode")**
> A benchmark consisting of recent programming problems scraped from the Leetcode website, designed to test models on data they have not been trained on.

## Relationships

### → LeetCode
- **Code generation** (behaviors tasks) — *measured_by*
  > ...HumanEval [4] and LeetCode [12] for coding... (Section 5.2)
  - [Noise Contrastive Alignment of Language Models with Explicit Rewards](https://proceedings.neurips.cc/paper_files/paper/2024/file/d5a58d198afa370a3dff0e1ca4fe1802-Paper-Conference.pdf)
- **Code understanding** (constructs) — *measured_by*
  > "Fill in the Blank evaluates a model’s code comprehension ability... We collected approximately 2,000 coding problems from LeetCode"
  - [CodeMMLU: A Multi-Task Benchmark for Assessing Code Understanding & Reasoning Capabilities of CodeLLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/078b4435f5b61a092025fec713084008-Paper-Conference.pdf)
