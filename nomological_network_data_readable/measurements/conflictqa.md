# ConflictQA
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Across papers, the dominant framing treats ConflictQA as a contradiction-checking benchmark built around questions paired with both aligned and conflicting evidence. Most descriptions emphasize samples containing a PopQA question, correct aligned evidence, and ChatGPT-generated contradictory evidence; one benchmark-oriented description adds that each question also comes with matched and contradictory evidence plus the answer. Some authors instead foreground its counterfactual contexts, noting that these questions often lack descriptors, and some studies report using only a subset.

**What it is claimed to measure.** Papers link ConflictQA to 1 construct and no behavioral indicators. The measurement claims converge on a single construct, Context utilization: one paper uses ConflictQA as a measurement instrument for context utilization, in a comparison that places it alongside CounterFact rather than spreading its use across multiple constructs.

**Space of uses.** Papers use it as an evaluation dataset for contradiction checking and for testing performance under conflicting or unhelpful contexts, and some explicitly work with a subset rather than the full benchmark. It is linked to 1 other instrument, ConflictQA+, which one paper presents as an extended version created by adding distracting, ambiguous, and duplicated contexts; another usage note says the dataset was adapted with GPT-4-generated sub-questions with descriptors to match a similar format with AmbigDocs.

**Concerns raised.** One paper raises a realism concern: artificial datasets such as ConflictQA are reported to often fail to represent the complexity and diversity of realistically retrieved context.

## Sources

**[Towards Knowledge Checking in Retrieval-augmented Generation: A Representation Perspective](https://aclanthology.org/2025.naacl-long.151.pdf)**
> A dataset used for contradiction checking, containing questions, correct aligned evidence, and ChatGPT-generated contradictory evidence.

## Relationships

### → ConflictQA
- **Context utilization** (constructs) — *measured_by*
  > We compare DRUID to synthetic datasets (CounterFact, ConflictQA) and find that artificial datasets often fail to represent the complexity and diversity of realistically retrieved context (Abstract).
  - [A Reality Check on Context Utilisation for Retrieval-Augmented Generation](https://aclanthology.org/2025.acl-long.968.pdf)

### Associated with
- **ConflictQA+** (measurements)
  > We construct extended versions, AmbigDocs+ and ConflictQA+, by adding ambiguous, conflicting, and duplicated contexts to AmbigDocs and distracting, ambiguous, and duplicated contexts to ConflictQA.
  - [CORG: Generating Answers from Complex, Interrelated Contexts](https://aclanthology.org/2025.naacl-long.428.pdf)
