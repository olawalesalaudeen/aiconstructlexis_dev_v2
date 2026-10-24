# Grokking
**Type:** Construct  
**Referenced in:** 4 papers  

## State of the Field

**Space of definitions.** Across the definitions, grokking is consistently framed as an observable training phenomenon in which test-set or generalization performance improves abruptly only long after a model has already reached near-perfect training performance or memorized the training data. The formulations largely agree on the same delayed shift from memorization to generalization, sometimes phrased as an "abrupt change from random guessing to generalization on the test set" after memorization.

**Space of facets.** The available descriptions place grokking between memorization and later generalization. One description says it "results from the model learning very structured representations," and another line of work glosses it as "extended training far beyond overfitting" when discussing how transformers learn implicit reasoning.

**Space of measurement.** No measurement instrument is linked to grokking, and no behavioral indicator is linked to it. The operationalization that appears in the snippets is descriptive rather than instrument-based: papers refer to sudden improvement in test-set or generalization performance after near-perfect training performance or memorization, and one study describes models that "grok faster" and show enhanced grokking behavior.

**Links.** Several papers claim a causal relationship from grokking to implicit reasoning, including the statement that "transformers can learn implicit reasoning, but only through grokking" and a claim that grokking-based data augmentation can unlock implicit multi-hop reasoning capabilities. One paper claims a causal relationship from grokking to generalization, phrased as a transition from "pure memorization to near-perfect generalization," and one paper claims a causal relationship from grokking to out-of-distribution generalization. Grokking is also related to memorization in work that places the generalization shift after the model memorized the training set, and one recorded relationship also runs in the reverse causal direction, from implicit reasoning to grokking.

## Sources

**[Learning to grok: Emergence of in-context learning and skill composition in modular arithmetic tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/17d60fef592086d1a5cb136f1946df59-Paper-Conference.pdf)**
> A phenomenon where a model's generalization performance abruptly improves long after it has achieved near-perfect performance on the training set through memorization.

## Relationships

### Grokking →
- **Implicit reasoning** (constructs) — *causes*
  > transformers can learn implicit reasoning, but only through grokking, i.e., extended training far beyond overfitting.
  - [Grokking of Implicit Reasoning in Transformers: A Mechanistic Journey to the Edge of Generalization](https://proceedings.neurips.cc/paper_files/paper/2024/file/ad217e0c7fecc71bdf48660ad6714b07-Paper-Conference.pdf)

### Associated with
- **Memorization** (constructs)
  > Power et al. [24] discovered Grokking, where models trained on modular arithmetic datasets have an abrupt change from random guessing to generalization on the test set way after the model memorized the training set. (Section 2)
  - [Learning to grok: Emergence of in-context learning and skill composition in modular arithmetic tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/17d60fef592086d1a5cb136f1946df59-Paper-Conference.pdf)
- **Generalization** (constructs)
  > “under certain conditions, overparameterized neural networks suddenly transition from pure memorization to near-perfect generalization”
  - [Grokking in the Wild: Data Augmentation for Real-World Multi-Hop Reasoning with Transformers](https://raw.githubusercontent.com/mlresearch/v267/main/assets/abramov25a/abramov25a.pdf)
