# BIG-Bench Logical Deduction
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** Logical deduction, Logical Deduction  

## State of the Field

**What it is.** Most definitions treat BIG-Bench Logical Deduction as a task from BigBench for deductive or logical reasoning. Definitions describe it as testing deductive reasoning from a set of premises, and one paper further frames it as a symbolic reasoning benchmark for deduction over structured premises; a smaller framing describes it more generally as a benchmark for evaluating logical reasoning capabilities. Papers also use the shorter label "Deduction" and place it among BigBench datasets such as Date Understanding, Penguin, and Colored Objects.

**What it is claimed to measure.** Papers link it to four constructs and one behavioral indicator. Its use as a measure does not converge on a single construct: papers use it to measure logical reasoning and symbolic reasoning, for example by including it among "seven logical reasoning tasks" or selecting it as one of four BigBench datasets for symbolic reasoning. A smaller set of links reports it as related to mathematical reasoning and to the reversal curse, and one paper claims a causal relationship from Chain of thought to BIG-Bench Logical Deduction.

**Space of uses.** Papers link it to two other measurement instruments, BIG-Bench Hard and PrOntoQA. Some report that BIG-Bench Logical Deduction is measured by BIG-Bench Hard, where logical deduction appears as one of the included tasks and scores are averaged across tasks; another reports it is measured by PrOntoQA in a 5-shot setting for logical reasoning. More broadly, papers usually deploy it as one task within larger reasoning evaluations, alongside AR-LSAT, ZebraLogic, FOLIO, and other reasoning tasks.

## Sources

**[Divide and Translate: Compositional First-Order Logic Translation and Verification for Complex Logical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/3e592c571de69a43d7a870ea89c7e33a-Paper-Conference.pdf) (as "Logical deduction")**
> A task from the BigBench benchmark that tests the ability to perform deductive reasoning from a set of premises.

**[Steering Large Language Models between Code Execution and Textual Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/f763f7c9a6599e14b07add5937d8189c-Paper-Conference.pdf) (as "Logical Deduction")**
> A benchmark for evaluating logical reasoning capabilities.

## Relationships

### → BIG-Bench Logical Deduction
- **Logical reasoning** (constructs) — *measured_by*
  > We evaluate CLOVER on seven logical reasoning tasks: AR-LSAT (Zhong et al., 2022), ZebraLogic (Lin et al., 2025), Logic grid puzzle (Puzzle), Symbol interpretation (Symbol), and Logical deduction (Deduction) from the BigBench collaborative benchmark (Srivastava et al., 2022), FOLIO (Han et al., 2022), and ProofWriter (Tafjord et al., 2021). (Section 4.1)
  - [Divide and Translate: Compositional First-Order Logic Translation and Verification for Complex Logical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/3e592c571de69a43d7a870ea89c7e33a-Paper-Conference.pdf)
- **Symbolic reasoning** (constructs) — *measured_by*
  > Symbolic Reasoning. We select four datasets from BigBench (Srivastava et al., 2022) for testing, including Date Understanding, Penguin, Colored Objects and Logical Deduction. (Section 4.1)
  - [Dynamic Collaboration of Multi-Language Models based on Minimal Complete Semantic Units](https://aclanthology.org/2025.emnlp-main.651.pdf)

### Associated with
- **BIG-Bench Hard** (measurements)
  > We evaluate on tasks selected from BIG-Bench Hard (BBH) [43], a collection of diverse tasks considered to be challenging to LLMs ... the tasks include numerical reasoning, commonsense problem-solving, logical deduction, linguistic manipulation, machine translation, and tabular reasoning, among others. (Section 3.1)
  - [Teach Better or Show Smarter? On Instructions and Exemplars in Automatic Prompt Optimization](https://proceedings.neurips.cc/paper_files/paper/2024/file/6b031defd145b02bed031093d8797bb3-Paper-Conference.pdf)
