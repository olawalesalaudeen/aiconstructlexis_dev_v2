# Permutation invariance
**Type:** Construct  
**Referenced in:** 4 papers  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** The explicit definition treats permutation invariance as order invariance in in-context learning: an algorithm's prediction for a test query remains the same when the context examples are reordered. In the formal statement, the requirement is that the last prediction is identical under any permutation of the context examples. A separate paper invokes "permutation invariance of code" when discussing generalization, but does not provide a different definition.

**Space of facets.** The papers do not break the construct into named subtypes or place it in a larger taxonomy. It is treated as a property that in-context learning algorithms can satisfy, and one paper notes that "recent studies have introduced several variant algorithms of ICL that achieve permutation invariance," but no alternative labels, nested constructs, or contrasts are specified.

**Space of measurement.** Operationalization is absent in the linked literature: no measurement instrument and no behavioral indicator are attached to permutation invariance. It is linked only to two other constructs, Generalization and Length generalization, so these papers discuss it conceptually rather than through a named benchmark, human evaluation protocol, judge model, probe, or analysis.

**Links.** The linked papers use permutation invariance only in causal claims about generalization. One paper claims a causal relationship from permutation invariance to Length generalization, describing "superior generalization capabilities across varying input lengths." Another paper claims a causal relationship from permutation invariance to Generalization, attributing improvement to the ability to exploit "permutation invariance of code" and to "enhancing the model's generalization capabilities"; the same paper also claims a causal relationship from Generalization to permutation invariance.

## Sources

**[Rethinking Invariance in In-context Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/01e8ecf628f8d9f62a1fd433d44d34ab-Paper-Conference.pdf)**
> The property of an in-context learning algorithm where its prediction for a test query remains the same regardless of the order of the context examples provided.

## Relationships

### Permutation invariance →
- **Generalization** (constructs) — *causes*
  > This improvement is primarily attributed to its ability to exploit permutation invariance of code, thereby enhancing the model’s generalization capabilities. (Section 5.2)
  - [Beyond Sequences: Two-dimensional Representation and Dependency Encoding for Code Generation](https://aclanthology.org/2025.acl-long.308.pdf)
