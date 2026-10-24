# Molecule optimization
**Type:** Behavior  
**Referenced in:** 4 papers  
**Also known as:** Molecular optimization, Property optimization  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats molecule optimization as searching, generating, or modifying molecules so that a target property is maximized. Most definitions center on molecules or chemical structures, sometimes specifically SMILES, and on success as obtaining molecules with better values on properties such as druglikeness, bioactivity, binding affinity, penalized logP, or QED; one formulation also describes the goal as to "design new molecules with desired properties such as high chemical stability, low toxicity, or selective inhibition against a target disease" (LICO: Large Language Models for In-Context Molecular Optimization). A smaller difference in wording is whether papers emphasize iterative search through chemical space or direct generation of new structures.

**Variants.** Papers use several nearby names for this behavior, including molecular optimization, property optimization, and targeted molecule discovery. The studied settings include SMILES generation, generating or modifying molecules, and searching the proximate chemical space for molecules with higher property scores; some work also reports evaluation under similarity constraints, and one snippet cites challenging molecule optimization tasks to "synthesize a drug molecule." The properties targeted vary across papers, with recurring examples including druglikeness, binding affinity, penalized logP, QED, bioactivity, and low toxicity.

**Space of elicitation and scores.** Papers link this behavior to one measurement instrument, PMO. One paper says molecule optimization is measured by Practical Molecular Optimization, PMO, which it describes as "a standard benchmark for molecular optimization with a focus on sample efficiency." No other instrument is linked.

**What it is taken as evidence of.** No construct is linked to this behavior, and the papers do not specify a named construct that molecule optimization is taken to indicate.

## Sources

**[LICO: Large Language Models for In-Context Molecular Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/84b16af3773fc5825ddb64996190289a-Paper-Conference.pdf) (as "Molecular optimization")**
> The task of iteratively searching the chemical space to find molecules that maximize a specific desired property, such as drug-likeness or bioactivity.

**[Searching for Optimal Solutions with LLMs via Bayesian Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/a79237d6c47feef24c1df723cb41f674-Paper-Conference.pdf)**
> The generation of chemical structures (SMILES) to optimize specific properties like druglikeness and binding affinity.

**[Domain-Agnostic Molecular Generation with Chemical Feedback](https://proceedings.iclr.cc/paper_files/paper/2024/file/ed7dd1e32cf9b0abf664bf0e891527e5-Paper-Conference.pdf) (as "Property optimization")**
> Generating or modifying molecules to maximize specific chemical properties such as penalized logP, QED, or binding affinity.

## Relationships

### Molecule optimization →
- **PMO** (measurements) — *measured_by*
  > We evaluate LICO on Practical Molecular Optimization (PMO) (Gao et al., 2022), a standard benchmark for molecular optimization with a focus on sample efficiency. (Section 5.1)
  - [LICO: Large Language Models for In-Context Molecular Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/84b16af3773fc5825ddb64996190289a-Paper-Conference.pdf)
